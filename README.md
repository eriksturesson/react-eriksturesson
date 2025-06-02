# What is this?

This repository contains the source code for my personal website: eriksturesson.se. The website showcases my professional background, skills, and portfolio.

Currently, it is a simple frontend-only project using React, Material-UI, and TypeScript. The only Firebase feature used is hosting for now (no database, authentication, or other Firebase services).

# Setting Up Locally

To host and test the website locally:

1. Create a Firebase project at firebase.com to host the website (it’s free).
2. Create a `config.ts` file in your `src` folder and add your Firebase configuration:

```
export const firebaseConfig = {
  apiKey: 'your-api-key',
  authDomain: 'your-project-id.firebaseapp.com',
  projectId: 'your-project-id',
  storageBucket: 'your-project-id.appspot.com',
  messagingSenderId: 'your-sender-id',
  appId: 'your-app-id'
};
```

3. Run `firebase init` to set up Firebase hosting. Make sure to get the `.firebaserc` file in your root folder, which will look like this:

```
{
  "projects": {
    "default": "yourFirebaseProjectName"
  }
}

```

# VITE

Changed from CRA (Create React App) to Vite

## Docker, Raspberry Pi & Cloudflare Setup

My server primarily runs on a Raspberry Pi using Docker. To automatically keep my Docker containers up to date, I use [Watchtower](https://github.com/containrrr/watchtower), which periodically checks for new images on Docker Hub and updates the containers without any manual intervention.

### How it works in brief:

- **GitHub Actions** automatically builds and pushes new Docker images to Docker Hub on every push to the `master` branch.
- The Raspberry Pi runs Docker with Watchtower, which automatically pulls and restarts containers when new images are available.
- Cloudflare is used as a reverse proxy and Zero Trust Tunnel, providing secure access to the server, including SSL and protection against attacks.
- Firebase Hosting serves as a fallback. If the Pi does not respond with a 200 status, Cloudflare's proxy routes traffic to Firebase to ensure the site is always available.

### Benefits of this setup:

- Fully automated deployment and updates with zero manual work.
- High availability thanks to Cloudflare and Firebase fallback.
- Secure traffic and easy management using Cloudflare Zero Trust.
- Cost-effective and efficient server solution leveraging the Raspberry Pi as an edge server.

---

This solution provides a stable and scalable foundation for my website and applications, integrating modern tools and services in a smart way.
