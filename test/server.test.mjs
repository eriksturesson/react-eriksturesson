import { before, after, test } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:net';
import { once } from 'node:events';

const syntheticIp = '192.0.2.123';
let child, closed, base, output = '';

before(async () => {
  const reservation = createServer();
  reservation.listen(0, '127.0.0.1');
  await once(reservation, 'listening');
  const { port } = reservation.address();
  await new Promise((resolve, reject) => reservation.close(err => err ? reject(err) : resolve()));
  base = `http://127.0.0.1:${port}`;
  child = spawn(process.execPath, ['dist-server/server.js'], {
    env: { ...process.env, PORT: String(port) },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  closed = new Promise(resolve => child.once('close', resolve));
  child.stdout.on('data', chunk => { output += chunk; });
  child.stderr.on('data', chunk => { output += chunk; });
  for (let i = 0; i < 80; i++) {
    if (child.exitCode !== null || child.signalCode !== null) throw new Error('Server exited');
    try {
      const response = await fetch(`${base}/health`, { signal: AbortSignal.timeout(500) });
      if (response.ok) return;
    } catch {}
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  throw new Error('Server did not become healthy');
});

after(async () => {
  if (child) {
    child.kill();
    await closed;
    assert.ok(!output.includes(syntheticIp), 'raw synthetic visitor IP must not appear in server logs');
    assert.doesNotMatch(output, /Express req\.ip|X-Forwarded-For \(/);
  }
});

test('dynamic GET and HEAD health cannot be cached', async () => {
  const response = await fetch(`${base}/health`, { headers: { 'X-Forwarded-For': syntheticIp } });
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  assert.deepEqual(await response.json(), { ok: true });
  const head = await fetch(`${base}/health`, { method: 'HEAD' });
  assert.equal(head.status, 200);
  assert.equal(head.headers.get('cache-control'), 'no-store');
  assert.equal(await head.text(), '');
});

test('navigation retains security headers without raw IP logging', async () => {
  const response = await fetch(base, { headers: { 'X-Forwarded-For': syntheticIp } });
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type') ?? '', /text\/html/);
  assert.ok(response.headers.has('content-security-policy'));
  assert.match(await response.text(), /Erik Sturesson/);
});

test('missing static assets return 404', async () => {
  const response = await fetch(`${base}/missing-server-smoke-test.js`);
  assert.equal(response.status, 404);
});

test('encoded and extensionless missing asset paths return 404', async () => {
  for (const pathname of ['/missing-server-smoke-test%2Ejs', '/assets/missing-server-smoke-test', '/assets/']) {
    const response = await fetch(base + pathname);
    assert.equal(response.status, 404, pathname);
    await response.arrayBuffer();
  }
});

test('real assets and the cookies navigation route remain available', async () => {
  const asset = await fetch(base + '/favicon.ico');
  assert.equal(asset.status, 200);
  assert.match(asset.headers.get('content-type') ?? '', /icon/);
  await asset.arrayBuffer();
  const cookies = await fetch(base + '/cookies');
  assert.equal(cookies.status, 200);
  assert.match(cookies.headers.get('content-type') ?? '', /text\/html/);
  await cookies.arrayBuffer();
});
