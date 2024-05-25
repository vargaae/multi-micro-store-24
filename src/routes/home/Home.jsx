import { useEffect, useState } from "react";

import { categories } from "../../constants/index";
// import { categories } from "../../constants/index";

import { StartCarousel, FeaturedProducts, Contact } from "./../../components";
import { CategoryDirectory } from "./../../containers";
// StartCategories,
// SearchBox,

const Home = () => {
  const [searchField, setSearchField] = useState("");
  const [products, setProducts] = useState([]);
  // const [productsTwo, setProductsTwo] = useState([]);

  useEffect(() => {
    setProducts(categories);
  }, []);
  // useEffect(() => {
  //   setProductsTwo(category2);
  // }, []);

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
      <div className="section__padding section__margin">
        <FeaturedProducts type="featured" />
        <CategoryDirectory products={filteredProducts} />
        <FeaturedProducts type="trending" />
      </div>
      {/* 
      
      <div className="section__padding section__margin section__width">
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search product categories"
          className="products-search-box"
        />
        <CategoryDirectory products={filteredProducts} />
  </div> */}
      <Contact />
    </>
  );
};

export default Home;
