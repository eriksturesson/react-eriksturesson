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

# Docker

Setting up so hosting can be done with an Express App and Docker, not only Firebase hosting
