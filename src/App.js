import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Home from "./routes/home/home.component";
import Footer from "./components/footer/footer.component";

function Shop() {
  return (
    <div>
      <h1>- SHOP will be here!!! -</h1>
    </div>
  );
}

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />}>
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
