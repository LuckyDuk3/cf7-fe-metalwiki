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

```
http://localhost:5000/
```

---

## Notes

- The frontend is configured to use the local backend at http://localhost:3000/api.
- If you change the backend URL, update api/axios.ts accordingly.
- Make sure the backend server is running before starting the frontend.

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