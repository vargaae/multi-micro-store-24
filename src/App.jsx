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

import { Navbar } from "./routes";

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
const About = lazy(() => import("./routes/about/About"));
const Success = lazy(() => import("./routes/success/Success"));

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
  const [navColor, setNavColor] = useState("transparent");
  const [navGradient, setNavGradient] = useState("");
  const listenScrollEvent = () => {
    if (window.matchMedia("(min-width: 550px)").matches) {
      window.scrollY > 8 ? setNavColor("transparent") : setNavColor("#040F1E");
      window.scrollY > 8 ? setNavGradient("gradient__bg") : setNavGradient("");
      setnavSize("8.2rem");
      window.scrollY > 8 ? setnavSize("5rem") : setnavSize("8.2rem");
    } else {
      window.scrollY > 5
        ? setNavColor("transparent")
        : setNavColor("transparent");
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
        className="gradient__bg"
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s",
        }}
      >
        <Navbar navGradient={navGradient} />
      </nav>
      <Outlet />
      <Footer />
    </Suspense>
  );
};

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
      {
        path: "/success=true",
        element: <Success />,
      },
      {
        path: "/about",
        element: <About />,
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
