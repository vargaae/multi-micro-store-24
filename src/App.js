import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import "./App.scss";
import Home from "./routes/home/home.component";
import Footer from "./components/footer/footer.component";
import Navigation from "./routes/navigation/navigation.component";

function Shop() {
  return (
    <div>
      <h1>- SHOP will be here!!! -</h1>
    </div>
  );
}

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
