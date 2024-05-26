import { useState } from "react";

import { Link, useParams } from "react-router-dom";

// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import BalanceIcon from "@mui/icons-material/Balance";

import "./ProductPage.styles.scss";
import useFetch from "../../hooks/useFetch";

const Product = () => {
  const id = useParams().id;

  const { data, loading, error, errorMessage } = useFetch(
    `/products/${id}?populate=*`
  );

  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="product-container">
      {error ? (
        `Something went wrong! Errormessage: "${errorMessage}"`
      ) : loading ? (
        "loading"
      ) : (
        <>
          <h2>
            <Link className="link" to="/">
              Home
            </Link>{" "}
            /{" "}
            <Link className="link" to="/">
              Products
            </Link>{" "}
            /{" "}
            <Link
              className="link"
              to={`/products/${data?.attributes?.categories.data[0].id}`}
            >
              {data?.attributes?.categories.data[0].attributes.title}
            </Link>{" "}
            /{" "}
            <Link
              className="link"
              to={`/products/${data?.attributes?.sub_categories.data[0].id}`}
            >
              {data?.attributes?.sub_categories.data[0].attributes.title}
            </Link>{" "}
            / {data?.attributes?.title}
          </h2>
          <div className="product">
            <div className="left">
              <div className="mainImg">
                <img
                  src={data?.attributes?.[selectedImg]?.data?.attributes?.url}
                  alt="Selected Show image"
                />
              </div>
              <div className="images">
                <img
                  src={data?.attributes?.img?.data?.attributes?.url}
                  alt="Show image 1"
                  onClick={(e) => setSelectedImg("img")}
                />
                <img
                  src={data?.attributes?.img2?.data?.attributes?.url}
                  alt="Show image 2"
                  onClick={(e) => setSelectedImg("img2")}
                />
              </div>
            </div>
            <div className="right">
              <h1>{data?.attributes?.title}</h1>
              <span className="price">${data?.attributes?.price}</span>
              <p>{data?.attributes?.desc}</p>

              <div className="quantity">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                {quantity}
                <button onClick={() => setQuantity((prev) => prev + 1)}>
                  +
                </button>
              </div>
              <button className="add">
                {/*<AddShoppingCartIcon /> */}ADD TO CART
              </button>
              <div className="links">
                <div className="item">
                  {/*<FavoriteBorderIcon /> */} ADD TO WISH LIST
                </div>
                <div className="item">
                  {/*<BalanceIcon /> */} ADD TO COMPARE
                </div>
              </div>
              <hr />
              <p>
                <strong>Available: </strong>
                {data?.attributes?.isAvailable}
              </p>
              <p>
                <strong>Available Colors: </strong>
                {data?.attributes?.colors}
              </p>
              <p>
                <strong>SKU: </strong>
                {data?.attributes?.SKU}
              </p>
              <p>
                <strong>Brand: </strong>
                {data?.attributes?.brand}
              </p>
              <hr />

              <div className="info">
                <span>Vendor: {data?.attributes?.brand}</span>
                <span>
                  Product Type:{" "}
                  {data?.attributes?.categories.data[0].attributes.title}
                </span>
                <span>
                  Tag: {data?.attributes?.categories.data[0].attributes.title},{" "}
                  {data?.attributes?.sub_categories.data[0].attributes.title},
                  Furniture, Interior Design
                </span>
              </div>
              <hr />
              <div className="info">
                <span>DESCRIPTION</span>
                <hr />
                <span>ADDITIONAL INFORMATION</span>
                <hr />
                <span>FAQ</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
