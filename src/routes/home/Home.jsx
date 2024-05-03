import { useEffect, useState } from "react";

import { categories } from "../../constants/index";

import SearchBox from "./../../components/search-box/SearchBox";
import CategoryDirectory from "./../../containers/category-directory/CategoryDirectory";


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
        placeholder="search product categories"
        className="products-search-box"
      />
      <CategoryDirectory products={filteredProducts} />
    </div>
  );
};

export default Home;
