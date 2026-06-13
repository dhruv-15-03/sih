# SIH — Smart India Hackathon Project

A **React** single-page application built for the Smart India Hackathon, using Material UI for
the interface, Firebase as the backend service, and Redux for state management.

> **🌐 Live Demo:** https://sih-iota.vercel.app

---

## Tech Stack

- **React** (Create React App)
- **Material UI** (`@mui/material`, `@mui/icons-material`, `@emotion`)
- **Firebase** (auth / data)
- **Redux** (`redux`, `redux-thunk`, `store`) for state management
- **Formik** for forms

## Getting Started

```bash
# install dependencies
npm install

# start the dev server at http://localhost:3000
npm start

# create a production build
npm run build
```

### Environment

Provide your Firebase web config via environment variables (e.g. in a `.env` file):

```bash
REACT_APP_FIREBASE_API_KEY=...
REACT_APP_FIREBASE_AUTH_DOMAIN=...
REACT_APP_FIREBASE_PROJECT_ID=...
REACT_APP_FIREBASE_APP_ID=...
```

## Deployment

The app is deployed on **Vercel**: https://sih-iota.vercel.app
