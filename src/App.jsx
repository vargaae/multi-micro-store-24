// TODO: CLEAN UP: -> delete SCART(here, store, components), imports
import { useState, useEffect, lazy, Suspense } from "react";

import {
  useLocation,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import ErrorPage from "./ErrorPage";

import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.reducer";

import { Spinner } from "./components";

import { Navigation } from "./routes";
import { NavigationBg } from "./routes";
import { Navbar } from "./routes";
// import {
//   Navigation,
//   Authentication,
//   Start,
//   StartStore,
//   Shop,
//   ProductPage,
//   ProductsPage,
//   Checkout,
// } from "./routes";
// import { Footer } from "./containers";

// const Navigation = lazy(() => import("./routes/navigation/Navigation"));
const Footer = lazy(() => import("./containers/footer/Footer"));
const Start = lazy(() => import("./routes/start/Start"));
const StartStore = lazy(() => import("./routes/start-store/StartStore"));
const Shop = lazy(() => import("./routes/shop/Shop"));
const ProductPage = lazy(() => import("./routes/product-page/ProductPage"));
const ShopProductPage = lazy(() =>
  import("./routes/product-page/ShopProductPage")
);
const ProductsPage = lazy(() => import("./routes/products-page/ProductsPage"));
const Checkout = lazy(() => import("./routes/checkout/Checkout"));
const Authentication = lazy(() =>
  import("./routes/authentication/Authentication")
);

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
  const [navSize, setnavSize] = useState("5rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    if (window.matchMedia("(min-width: 550px)").matches) {
      window.scrollY > 9 ? setnavColor("transparent") : setnavColor("#040F1E");
      setnavSize("9rem");
      window.scrollY > 9 ? setnavSize("5rem") : setnavSize("9rem");
    } else {
      window.scrollY > 5
        ? setnavColor("transparent")
        : setnavColor("transparent");
      window.scrollY > 5 ? setnavSize("5rem") : setnavSize("5rem");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <Suspense fallback={<Spinner />}>
      <ScrollToTop />
      <nav
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s",
          paddingTop: "5rem",
        }}
      >
        <Navbar />
      </nav>
      <Outlet />
      <Footer />
    </Suspense>
  );
};

{
  /* <div className="top"></div> */
}
{
  /* <Navbar style={{
    backgroundColor: navColor,
    height: navSize,
    transition: "all 1s"
  }} /> */
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Start />,
      },
      {
        path: "/store/products/:id",
        element: <ProductsPage />,
      },
      {
        path: "/products/:id",
        element: <ProductsPage />,
      },
      {
        path: "/store/product/:catId/:id",
        element: <ProductPage />,
      },
      {
        path: "/product/:catId/:id",
        element: <ProductPage />,
      },
      {
        path: "shop/product/:id",
        element: <ShopProductPage />,
      },
      {
        path: "shop/:catName/product/:id",
        element: <ShopProductPage />,
      },
      {
        path: "/shop/*",
        element: <Shop />,
      },
      {
        path: "/store/*",
        element: <StartStore />,
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

  return <RouterProvider router={router} />;
};

export default App;
