# CF7 FE MetalWiki

Frontend of the MetalWiki application, built with React, Vite, and TailwindCSS.  
Connects to the backend API to display bands, handle authentication, and manage users.

---

## Prerequisites

- Node.js v20+  
- npm

---

## Installation

```bash
git clone <repo-url>
cd cf7-fe-metalwiki
npm install
```

---

## Scripts
```bash
npm run dev      # Start the development server
npm run build    # Build production-ready files (with TypeScript compilation)
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint for code linting
```

---

## Access the App
```
Development mode (recommended): http://localhost:5000/
Preview mode (production build): http://localhost:4173/ (or 5000 if using the port tip below)
```

---

## Notes

- The frontend is configured to use the local backend at http://localhost:3000/api in api/axios.ts.
- If you change the backend URL, update api/axios.ts accordingly.
- Make sure the backend server is running before starting the frontend.
- npm run preview serves the production build at a different port (default 4173).

- To preview on the same port as dev for consistency, run:
```bash
npm run preview -- --port 5000
```

---

## Technologies
- React 19+
- React DOM 19+
- React Router DOM
- Vite
- TypeScript
- TailwindCSS & @tailwindcss/vite
- Axios for API calls
- ESLint with plugins: react-hooks, react-refresh