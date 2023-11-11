import { useEffect, useState } from "react";

import "./App.css";
import Footer from "./components/footer/footer.component";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

import data from "./data";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredProducts = products.filter((user) => {
    return user.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://pilis-solar.hu/files/menu/46/webshop.png"
          className="App-logo"
          alt="logo"
        />
      </header>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search products"
        className="products-search-box"
      />
      <CardList products={filteredProducts} />
      <Footer />
    </div>
  );
};

export default App;
