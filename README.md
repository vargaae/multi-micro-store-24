 <div align="center">
  <img alt="Application image" src="https://cdn.shopify.com/s/files/1/0070/7032/files/ecommerce_apps.jpg?v=1665592014" />
</div>
  <div align="center">
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Redux-black?style=for-the-badge&logoColor=white&logo=redux&color=764ABC" alt="redux" />
    <img src="https://img.shields.io/badge/-Styled-black?style=for-the-badge&logoColor=white&logo=styled&color=06B6D4" alt="styled" />
  </div>

# MULTI-MICRO-STORE-24

## MULTI ECOMMERCE APPLICATION WITH MICROSERVICES

Features/Structure:
- 🚀Redux for State Management<br> is set up in this branch (🪵12-Redux)
- (Migrated from Context API), 
- 🚀AUTHENTICATION->Sign Up with email, 
- 🚀AUTHENTICATION->Log in with email, 
- 🚀AUTHENTICATION->Sign Up and Log In with Google account, 
- 🚀SHOP, 
- 🚀CART+USERMENU DROPDOWNs, 
- 🚀Adding to CART,
- 🚀CHECKOUT,
- 🚀CART & CHECKOUT functionality (adding and decreasing amount, priceCount, TotalPriceCount),
- 🚀Database for products and users,
- 🚀Styled components

## 🛠 Front End:

- React 18.2
- Redux (Redux Toolkit)
- SASS
- styled components
- Firebase connected

## 🛠 Back End:
- Firebase
- Firestore Database

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
