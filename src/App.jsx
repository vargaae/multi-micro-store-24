import { Fragment, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.reducer";

import { Home, Authentication, Navigation, Shop, Checkout } from "./routes";
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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="authentication" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
