import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";

import { resetCart } from "../../store/cart/cart.reducer";

import { BreadcrumbNav, Contact } from "../../components";

import { images } from "../../constants";

import ConfettiExplosion from "react-confetti-explosion";

import {
  ShopContainer,
  Title,
  ShopBreadcrumbNavContainer,
  ShopBreadcrumbLink,
  Thanks,
  ImageContainer,
  BrandContainer,
  BrandLogoContainer,
} from "./Success.styles";

const Success = () => {
  const headerTitle = "Order Successful";
  const [isExploding, setIsExploding] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetCart());
  }, [dispatch]);

  return (
    <>
      {isExploding && (
        <ConfettiExplosion
          force={0.8}
          duration={3000}
          particleCount={250}
          width={1600}
        />
      )}
      <BreadcrumbNav headerTitle={headerTitle} />
      <ShopContainer>
        <Title>PAYMENT IS SUCCESSFUL</Title>
        <ShopBreadcrumbNavContainer>
          <ShopBreadcrumbLink to={"/"}>Home</ShopBreadcrumbLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            color="rgb(0, 0, 0)"
          >
            <path d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"></path>
          </svg>
          ORDER
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            color="rgb(0, 0, 0)"
          >
            <path d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"></path>
          </svg>
          SUCCESS
        </ShopBreadcrumbNavContainer>
        <Thanks>Thanks for your order!</Thanks>

        <div
          data-framer-name="About Image Banner"
          id="brand"
          name="About Image Banner"
        >
          <div data-framer-name="Container" name="Container">
            <div>
              <ImageContainer>
                <img
                  decoding="async"
                  sizes="max(min(max(100vw, 0px), 1600px), 0px)"
                  src={images.success}
                  alt="About us picture"
                />
              </ImageContainer>
              <Thanks>
                We appreciate your business! If you have any questions, please
                email:
                <a href="mailto:orders@mmstore-24.com">orders@mmstore-24.com</a>.
              </Thanks>
            </div>
          </div>
        </div>
        <BrandContainer>
          <BrandLogoContainer>
            <img
              decoding="async"
              loading="lazy"
              src="https://framerusercontent.com/images/zBWNdmAieoTmcQCkIkTZ9rfnqo.svg"
              alt="Brand image"
            />
          </BrandLogoContainer>
          <BrandLogoContainer>
            <img
              decoding="async"
              loading="lazy"
              src="https://framerusercontent.com/images/u8WevV7mCKQBN8jeLHALsSQQs34.svg"
              alt="Brand image"
            />
          </BrandLogoContainer>
          <BrandLogoContainer>
            <img
              decoding="async"
              loading="lazy"
              src="https://framerusercontent.com/images/StsYHkCZHpy4eY8jsBCQEWc.svg"
              alt="Brand image"
            />
          </BrandLogoContainer>
          <BrandLogoContainer>
            <img
              decoding="async"
              loading="lazy"
              src="https://framerusercontent.com/images/jOc8ocv3NkFD0PkOQbamqxXhuE.svg"
              alt="Brand image"
            />
          </BrandLogoContainer>
          <BrandLogoContainer>
            <img
              decoding="async"
              loading="lazy"
              src="https://framerusercontent.com/images/z336n0D2YdMY9XgDiBAU7XSW6s.svg"
              alt="Brand image"
            />
          </BrandLogoContainer>
          <BrandLogoContainer>
            <img
              decoding="async"
              loading="lazy"
              src="https://framerusercontent.com/images/WdroEkOLMZk4iQzRgxNWMhLTlY.svg"
              alt="Brand image"
            />
          </BrandLogoContainer>
        </BrandContainer>
      </ShopContainer>
      <Contact />
    </>
  );
};

export default Success;
