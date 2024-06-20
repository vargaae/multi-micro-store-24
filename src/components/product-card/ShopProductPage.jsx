import { addItemToCart } from "../../store/cart/cart.reducer";
import { useDispatch } from "react-redux";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { ButtonComponent, BUTTON_TYPE_CLASSES } from "../";

import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./ProductCard.styles";
import { db, getSingleDocument } from "../../utils/firebase/firebase.utils";
import { collection, onSnapshot } from "firebase/firestore";

const ShopProductPage = ({}) => {
  const [singleProduct, setSingleProduct] = useState([]);
  console.log(singleProduct);

  useEffect(() => {
    onSnapshot(collection(db, "categories"), (snapshot) =>
      setSingleProduct(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      )
    );
  }, []);

  useEffect(() => {
    const getProduct = async () => {
      // it's now categoriesArray!!!, not categoriesMap with OBJECT anymore:
      const singleProduct = await getSingleDocument(1);
      // dispatch(setCategories(categoriesArray));

      // setSingleProduct(singleProduct)
    };

    getProduct();
  }, []);

  //TODO:Clean->
  // const { name, price, imageUrl } = product;

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  //TODO:Clean->
  // const addProductToCart = () => dispatch(addItemToCart(product));
  // const addProductToCart = () =>
  //   dispatch(
  //     addItemToCart({
  //       name: name,
  //       price: price,
  //       imageUrl: imageUrl,
  //       quantity: quantity,
  //     })
  //   );

  // TODO: link to={`/product/1/1`}

  return (
    <ProductCardContainer>
      <Link className="productpagelink" to={`/product/1/1`}></Link>
      NAME - PRICE - IMG
      {Object.keys(singleProduct).map((title) => {
        const products = singleProduct[title];
        return <div key={title}>{title}</div>;
      })}
      {/* <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>name{name}</Name>
        <Price>€{price}</Price>
      </Footer>
      <ButtonComponent
        buttonType={BUTTON_TYPE_CLASSES.shop}
        onClick={addProductToCart}
      >
        Buy Now
      </ButtonComponent> */}
    </ProductCardContainer>
  );
};

export default ShopProductPage;
