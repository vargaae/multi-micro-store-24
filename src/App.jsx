import { Fragment, useEffect } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import ErrorPage from "./ErrorPage";

import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.reducer";

import {
  Home,
  Authentication,
  Navigation,
  Shop,
  Checkout,
  ProductPage,
  ProductsPage,
} from "./routes";
import { Footer } from "./containers";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Layout = () => {
  return (
    <div className="app">
      <ScrollToTop />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  // {
  //   path: "*",
  //   element: <App />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <ProductsPage />,
      },
      {
        path: "/shop/1/:id",
        element: <ProductPage />,
      },
      {
        path: "/shop/*",
        element: <Shop />,
      },
      {
        path: "/authentication",
        element: <Authentication />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);
// <Routes>
// <Route path="/" element={<Navigation />}>
//   <Route index element={<Home />} />
//   <Route path="shop/*" element={<Shop />} />
//   <Route path="shop/1/*" element={<ProductPage />} />
//   <Route path="authentication" element={<Authentication />} />
//   <Route path="checkout" element={<Checkout />} />
// </Route>
// </Routes>

const App = () => {
  const dispatch = useDispatch();
  // Immutability Check Middleware TEST:
  // let test = useSelector((state) => state.user.test);

  // test.a = 2;

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      const pickedUser =
        user &&
        (({ accessToken, email, displayName, photoURL }) => ({
          accessToken,
          email,
          displayName,
          photoURL,
        }))(user);

      dispatch(setCurrentUser(pickedUser));
    });

    return unsubscribe;
  }, []);

  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
};

export default App;
