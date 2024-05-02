import { useState, useEffect, useRef } from "react";

export default function useCartOpen() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const refCart = useRef(null);

  const handleClickOutside = (event) => {
    if (refCart.current && !refCart.current.contains(event.target)) {
      setIsCartOpen(!isCartOpen);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, !isCartOpen);

    return () => {
      document.removeEventListener(
        "click",
        handleClickOutside,
        !isCartOpen
      );
    };
  });

  return { refCart, isCartOpen, setIsCartOpen };
}