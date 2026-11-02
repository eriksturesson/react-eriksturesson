# Temporary: Express runtime while HOME-331 nginx:alpine images fail pod Ready
# on M70Q. Re-attempt nginx slim after the debug pod on M70Q shows the cause.
# ---- STEP 1: Build frontend + backend ----
FROM node:20 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

# Bygg frontend
RUN npm run build

# Kompilera server.ts med rätt tsconfig
RUN npm run build:server

# ---- STEP 2: Prod image ----
FROM node:20

WORKDIR /app

# Kopiera endast det som behöds för produktion
COPY --from=build /app/dist ./dist
COPY --from=build /app/dist-server ./dist-server
COPY --from=build /app/package*.json ./

RUN npm install --omit=dev

EXPOSE 3009

CMD ["node", "dist-server/server.js"]
