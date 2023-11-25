import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Home from "./routes/home/home.component";
import Footer from "./components/footer/footer.component";

const Shop = () => {
  return <h1>SHOP component</h1>;
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
