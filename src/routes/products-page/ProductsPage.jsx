import { useState } from "react";

import { Link, useParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";

import { List } from "../../components";

import "./ProductsPage.styles.scss";

const Products = () => {
  // We can get the id in string:
  // const param = useParams()
  const catId = parseInt(useParams().id);
  const rangeMinimum = 0;
  const rangeMaximum = 1510;
  const [maxPrice, setMaxPrice] = useState(rangeMaximum);
  const [sort, setSort] = useState(`asc`);
  // const [sort, setSort] = useState("asc")
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  
  // TODO: Title: {data?.attributes?.categories.data[0].attributes.title}
  // let { id } = 1;
  // const { dataCategory, loadingC, errorC, errorMessageC } = useFetch(
  //   `/products/${id}`
  // );
  // console.log(dataCategory);

  // !!!TODO: subcategories-t így remekül behozza:
  const { data, loading, error, errorMessage } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  const onOptionChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <>
      <div className="product-container">
        <h2>
          <Link className="link" to="/">
            Home
          </Link>{" "}
          /{" "}
          <Link className="link" to="/">
            Products
          </Link>{" "}
          / Category
        </h2>
      </div>
      <div className="products">
        <div className="left">
          <div className="filterItem">
            <h2>Product Categories</h2>
            {error
              ? `Something went wrong! ${errorMessage}`
              : loading
              ? "loading"
              : data?.map((item) => (
                  <div className="inputItem" key={item.id}>
                    <input
                      type="checkbox"
                      id={item.id}
                      value={item.id}
                      onChange={handleChange}
                    />
                    <label htmlFor={item.id}>{item.attributes.title}</label>
                  </div>
                ))}
          </div>
          <div className="filterItem">
            <h2>Filter by price</h2>
            <div className="inputItem">
              <span>{rangeMinimum}</span>
              <input
                type="range"
                min={rangeMinimum}
                max={rangeMaximum}
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>€{maxPrice}</span>
            </div>
          </div>
          <div className="filterItem">
            <h2>Sort by</h2>
            <div className="inputItem">
              <input
                type="radio"
                id="asc"
                value="asc"
                name="price"
                checked={sort === "asc"}
                onChange={onOptionChange}
              />
              <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className="inputItem">
              <input
                type="radio"
                id="desc"
                value="desc"
                name="price"
                checked={sort === "desc"}
                onChange={onOptionChange}
              />
              <label htmlFor="desc">Price (Highest first)</label>
            </div>
          </div>
          <button onClick={handleChange}>Filter</button>
        </div>
        <div className="right">
          <img
            className="catImg"
            src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <List
            catId={catId}
            maxPrice={maxPrice}
            sort={sort}
            subCats={selectedSubCats}
          />
        </div>
      </div>
    </>
  );
};

export default Products;
