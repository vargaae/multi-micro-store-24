import useFetch from "../../hooks/useFetch";
import { useState } from "react";

import { useNavigate, Link, useParams } from "react-router-dom";

// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import BalanceIcon from "@mui/icons-material/Balance";

import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/scart.slice";

import "./ProductPage.styles.scss";

const ProductPage = () => {
  let { id } = useParams();

  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const { data, loading, error, errorMessage } = useFetch(
    `/products/${id}?populate=*`
  );

  const navigateTo = useNavigate();

  const goToSCart = () => {
    navigateTo("/scart");
  };

  // TODO: Products link to breadcrumb??? - most a SHOP-ra tettem a linket
  // TODO: PRODUCTS link to breadcrumb??? - most a category-ra tettem a linket
  // <Link
  //               className="link"
  //               to={`/products/${data?.attributes?.categories.data[0].id}`}
  //             >
  //               {data?.attributes?.categories.data[0].attributes.title}
  //             </Link>{" "}
  //             /{" "}
  //             <Link
  //               className="link"
  //               to={`/products/${data?.attributes?.categories.data[0].id}`}
  //             >
  //               {data?.attributes?.sub_category.data.attributes.title}
  //             </Link>{" "}
  // TODO: sub_categories link to breadcrumb??? - most a category-ra tettem a linket
  // <Link
  //               className="link"
  //               to={`/products/${data?.attributes?.sub_category.data.id}`}
  //             >
  //               {data?.attributes?.sub_category.data.attributes.title}
  //             </Link>{" "}

  // TODO: map categories/sub_categories:
  // {error
  //   ? `Something went wrong! ${errorMessage}`
  //   : loading
  //   ? "loading"
  //   : data?.map((item) => (
  //       <div className="inputItem" key={item.id}>
  //         <input
  //           type="checkbox"
  //           id={item.id}
  //           value={item.id}
  //           onChange={handleChange}
  //         />
  //         <label htmlFor={item.id}>{item.attributes.title}</label>
  //       </div>
  //     ))}

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
            <Link className="link" to="/shop">
              Products
            </Link>{" "}
            / {data?.attributes?.title}
          </h2>
          <div className="product">
            <div className="left">
              <div className="mainImg">
                <img
                  src={
                    import.meta.env.VITE_APP_STRAPI_UPLOAD_URL +
                    data?.attributes?.[selectedImg]?.data?.attributes?.url
                  }
                  alt="Selected Show image"
                />
              </div>
              <div className="images">
                <img
                  src={
                    import.meta.env.VITE_APP_STRAPI_UPLOAD_URL +
                    data?.attributes?.img?.data?.attributes?.url
                  }
                  alt="Show image 1"
                  onClick={(e) => setSelectedImg("img")}
                />
                <img
                  src={
                    import.meta.env.VITE_APP_STRAPI_UPLOAD_URL +
                    data?.attributes?.img2?.data?.attributes?.url
                  }
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
              <button
                className="add"
                onClick={() =>
                  dispatch(
                    addItemToCart({
                      id: data.id,
                      title: data.attributes.title,
                      desc: data.attributes.desc,
                      price: data.attributes.price,
                      img: data.attributes.img.data.attributes.url,
                      quantity,
                    })
                  )
                }
              >
                ADD TO CART
              </button>
              <button className="add" onClick={goToSCart}>
                GO TO CART
              </button>
              <div className="links">
                <div className="item">ADD TO WISH LIST</div>
                <div className="item">ADD TO COMPARE</div>
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
                  Product Type: {data?.attributes?.type},{""}
                  {data?.attributes?.categories.data[0].attributes.title}
                </span>
                <span>
                  Tag: {data?.attributes?.categories.data[0].attributes.title},{" "}
                  {data?.attributes?.sub_category.data.attributes.title},
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

export default ProductPage;
