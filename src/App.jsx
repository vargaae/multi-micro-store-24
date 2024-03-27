import { Fragment, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";

import { Home, Authentication, Navigation, Shop } from "./routes";
import { Footer } from "./containers";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <Fragment>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="authentication" element={<Authentication />} />
        </Route>
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
