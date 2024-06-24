// TODO: CLEAN UP: -> delete SCART(here, store, components), imports
import { useEffect, lazy, Suspense } from "react";

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

// import {
//   Navigation,
//   Authentication,
//   Start,
//   StartStore,
//   Shop,
//   ProductPage,
//   ProductsPage,
//   Checkout,
//   SCart,
// } from "./routes";
// import { Footer } from "./containers";

const Navigation = lazy(() => import("./routes/navigation/Navigation"));
const Footer = lazy(() => import("./containers/footer/Footer"));
const Start = lazy(() => import("./routes/start/Start"));
const StartStore = lazy(() => import("./routes/start-store/StartStore"));
const Shop = lazy(() => import("./routes/shop/Shop"));
const ProductPage = lazy(() => import("./routes/product-page/ProductPage"));
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
  return (
    <Suspense fallback={<Spinner />}>
      <ScrollToTop />
      <Navigation />
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
        path: "/interior/products/:id",
        element: <ProductsPage />,
      },
      {
        path: "/products/:id",
        element: <ProductsPage />,
      },
      {
        path: "/interior/product/:catId/:id",
        element: <ProductPage />,
      },
      {
        path: "/product/:catId/:id",
        element: <ProductPage />,
      },
      {
        path: "/shop/*",
        element: <Shop />,
      },
      {
        path: "/interior/*",
        element: <StartStore />,
      },
      {
        path: "/authentication",
        element: <Authentication />,
      },
      // {
      //   path: "/scart",
      //   element: <SCart />,
      // },
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
