 <div align="center">
  <img alt="Application image" src="https://cdn.shopify.com/s/files/1/0070/7032/files/ecommerce_apps.jpg?v=1665592014" width="400" />
</div>
<br>
  <div align="center">
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
  </div>

# MICRO-STORE-24 - ECOMMERCE APPLICATION 2024

Features/Structure:

- 🚀Redux for State Management<br> is set up in this branch (🪵18-Redux)
- (Migrated from Context API),
- 🚀STORE,
- 🚀API and Database for products with headless CMS: Strapi and PostgreSQL database,
- 🚀SHOP: Database for products with Firebase,
- 🚀AUTHENTICATION->Sign Up with email,
- 🚀AUTHENTICATION->Log in with email,
- 🚀AUTHENTICATION->Sign Up and Log In with Google account,
- 🚀ProductPage,
- 🚀CART+USERMENU DROPDOWNs,
- 🚀Adding to CART,
- 🚀CHECKOUT,
- 🚀CART & CHECKOUT functionality (adding and decreasing amount, priceCount, TotalPriceCount),
- 🚀Database for products and users with Firebase,
- 🚀Styled components

## 🛠 Front End:

- React 18.2
- Redux (+Redux Toolkit)
- SASS
- styled components
- plugins:
  "react-awesome-slider": "^4.1.0",
  "react-alice-carousel": "^2.9.1",
  "react-slick": "^0.30.2",
  "react-lazy-load-image-component": "^1.6.0",
  "react-optimized-image": "^0.4.1",
  "framer-motion": "^11.2.10",
  "react-icons": "^5.2.1",
  "react-spinners": "^0.13.8",
  "scroll-lock": "^2.1.5",
- Firebase connected
- Strapi connected

## 🛠 Back End:

- NodeJS
- PostgreSQL
- Strapi
- Firebase
- Firestore Database

## ECOMMERCE 2024 ClientSide Application - Screenshots

<div align="center">
  <img alt="Application image" src="https://vargaae.hu/images/projects/e-comm-2024-git.png" width="700" />
</div>
[Deployed here]([https://ecommerce-2024-y49k.onrender.com/])

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

1. Clone this repo
2. Run `npm install`
3. You must add your own API key in the `utils/firebase/firebase-utils.js` file to connect to your Database.

You can grab FIREBASE API key [here](https://firebase.google.com/)

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
VITE_FIREBASE_API_KEY=
```

1. **Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.
