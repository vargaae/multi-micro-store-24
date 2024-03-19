import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import "./App.scss";
import Home from "./routes/home/home.component";
import Footer from "./components/footer/footer.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/SignIn";
import Shop from "./routes/shop/shop.component";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
