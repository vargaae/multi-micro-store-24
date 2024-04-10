import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { productName, imageUrl, price, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${productName}`} />
      <div className="item-details">
        <span className="name">{productName}</span>
        <span className="price">
          {quantity} x €{price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
