import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import "./App.scss";
import Home from "./routes/home/Home";
import Footer from "./components/footer/Footer";
import Navigation from "./routes/navigation/Navigation";
import Authentication from "./routes/authentication/Authentication";
import Shop from "./routes/shop/Shop";

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
      <Footer />
    </Fragment>
  );
};

export default App;
