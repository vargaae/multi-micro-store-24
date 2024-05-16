import { useEffect, useState } from "react";

import { categories } from "../../constants/index";

import { StartCarousel, SearchBox } from "./../../components";
import { CategoryDirectory } from "./../../containers";

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
    <>
      <StartCarousel />
      <div className="section__padding section__margin section__width">
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search product categories"
          className="products-search-box"
        />
        <CategoryDirectory products={filteredProducts} />
      </div>
    </>
  );
};

export default Home;
