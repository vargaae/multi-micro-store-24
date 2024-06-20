import { addItemToCart } from "../../store/cart/cart.reducer";
import { useDispatch } from "react-redux";

import { useEffect, useState } from "react";

import { useNavigate, Link, useParams } from "react-router-dom";

import { ButtonComponent, BUTTON_TYPE_CLASSES } from "../";

import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./ShopProductPage.styles";
import { db, getSingleDocument } from "../../utils/firebase/firebase.utils";
import { collection, doc, onSnapshot } from "firebase/firestore";

const ShopProductPage = ({}) => {
  const [selectedImg, setSelectedImg] = useState("singleProduct.imageUrl");

  const [singleProduct, setSingleProduct] = useState({});
  let { id } = useParams();
  // console.log(singleProduct);

  useEffect(() => {
    const docRef = doc(db, "accesories", id);

    onSnapshot(docRef, (doc) => {
      setSingleProduct(doc.data(), doc.id);
    });
  }, []);

  // useEffect(() => {
  //   const getProduct = async () => {
  //     // it's now categoriesArray!!!, not categoriesMap with OBJECT anymore:
  //     const singleProduct = await getSingleDocument(1);
  //     // dispatch(setCategories(categoriesArray));

  //     // setSingleProduct(singleProduct)
  //   };

  //   getProduct();
  // }, []);

  //TODO:Clean->
  // const { name, price, imageUrl } = product;

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  //TODO:Clean->
  // const addProductToCart = () => dispatch(addItemToCart(product));
  const addProductToCart = () =>
    dispatch(
      addItemToCart({
        name: singleProduct.name,
        price: singleProduct.price,
        imageUrl: singleProduct.imageUrl,
        quantity: singleProduct.quantity,
      })
    );

  // TODO: link to={`/product/1/1`}

  return (
    <div className="product-container">
      { (
        <>
          <h2 className="breadcrumb-nav">
            <Link className="link" to="/">
              Home
            </Link>{" "}
            /{" "}
            <Link className="link" to="/products/7">
              Products
            </Link>{" "}
            / {singleProduct.name}
          </h2>
          <div className="product">
            <div className="left">
              <div className="mainImg">
                <img
                  src={singleProduct.imageUrl}
                  alt="Selected Show image"
                />
              </div>
              <div className="images">
                <img
                  src={singleProduct.imageUrl}
                  alt="Show image 1"
                  onClick={(e) => setSelectedImg(singleProduct.imageUrl)}
                />
                <img
                  src={singleProduct.imageUrl}
                  alt="Show image 2"
                  onClick={(e) => setSelectedImg(singleProduct.imageUrl)}
                />
              </div>
            </div>
            <div className="right">
              <h1>{singleProduct.name}</h1>
              <span className="price">€{singleProduct.price}</span>
              <p>{singleProduct.desc}</p>
              {/*
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
                */}
              <ButtonComponent onClick={addProductToCart}>
                ADD TO CART
              </ButtonComponent>
              <hr />
              <p>
                <strong>Available: </strong>
                {singleProduct.isAvailable}
              </p>
              <p>
                <strong>Available Colors: </strong>
                {singleProduct.colors}
              </p>
              <p>
                <strong>SKU: </strong>
                {singleProduct.SKU}
              </p>
              <p>
                <strong>Brand: </strong>
                {singleProduct.brand}
              </p>
              <hr />
              <div className="info">
                <span>Vendor: {singleProduct.brand}</span>
                <span>
                  Product Type: {singleProduct.type},{""}
                  {"singleProduct.hats[0]"}
                </span>
                <span>
                  Tag: {"singleProduct.hats[0]"}, {"singleProduct.sub_category[0]"},
                  Design SHOP
                </span>
              </div>
              <hr />
              {/*   
           <div className="info">
                <span>DESCRIPTION</span>
                <hr />
                <span>ADDITIONAL INFORMATION</span>
                <hr />
                <span>FAQ</span>
                </div> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShopProductPage;
