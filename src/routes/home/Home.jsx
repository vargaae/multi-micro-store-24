import { useEffect, useState } from "react";
import "./../../App.scss";
import SearchBox from "./../../components/search-box/SearchBox";
import CategoryDirectory from "./../../components/category-dir/CategoryDir";

import { categories } from "../../constants/index";

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
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search products"
        className="products-search-box"
      />
      <CategoryDirectory products={filteredProducts} />
    </div>
  );
};

export default Home;
