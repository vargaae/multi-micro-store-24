import { useEffect, useState } from "react";
import "./../../App.scss";
import SearchBox from "./../../components/search-box/search-box.component";
import CategoryDirectory from "./../../components/category-dir/category-dir.component";

import categories from "./../../data";
import { Outlet } from "react-router-dom";

const Home = () => {
  const [searchField, setSearchField] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categories);
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredProducts = products.filter((user) => {
    return user.title.toLocaleLowerCase().includes(searchField);
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
      <CategoryDirectory products={filteredProducts} />
      <Outlet />
    </div>
  );
};

export default Home;
