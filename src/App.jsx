import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

import ButtonGradient from "./assets/svg/ButtonGradient";
import { Home, Authentication, Navigation, Shop } from "./routes";
import { Footer } from "./containers";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="authentication" element={<Authentication />} />
        </Route>
      </Routes>
      <ButtonGradient />
      <Footer />
    </Fragment>
  );
};

export default App;
