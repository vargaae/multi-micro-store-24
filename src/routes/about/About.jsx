import { BreadcrumbNav, Contact } from "../../components";

import { images } from "../../constants";

import {
  ShopContainer,
  Title,
  ShopBreadcrumbNavContainer,
  ShopBreadcrumbLink,
  AboutContainer,
  ImageContainer,
  BrandContainer,
  BrandLogoContainer,
  MottoContainer,
} from "./About.styles";

const About = () => {
  const headerTitle = "About";

  return (
    <>
      <BreadcrumbNav headerTitle={headerTitle} />
      <ShopContainer>
        <Title>ABOUT US</Title>
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
          ABOUT US
        </ShopBreadcrumbNavContainer>
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
                  srcSet={`${images.aboutSmall} 512w, ${images.aboutMedium} 1024w, ${images.aboutLarge} 2048w, ${images.aboutXLarge} 4096w, ${images.aboutFull} 6000w`}
                  src={images.aboutFull}
                  alt="About us picture"
                />
              </ImageContainer>
            </div>
          </div>
        </div>
        <AboutContainer>
          <div>
            <p>
              <a
                href="#"
                rel="noopener"
              >
                SHOP ONLINE
              </a>
            </p>
            <p>
              Explore a vast collection of premium clothing from the comfort of
              your home.
            </p>
          </div>
          <div>
            <p>
              <a
                href="#"
                rel="noopener"
              >
                FREE SHIPPING
              </a>
            </p>
            <p>
              Enjoy the convenience of free shipping on all orders, nationwide.
            </p>
          </div>
          <div>
            <p>
              <a
                href="#"
                rel="noopener"
              >
                RETURN POLICY
              </a>
            </p>
            <p>
              Your satisfaction is our priority. Return any product you are not
              satisfied with.
            </p>
          </div>
          <div>
            <p>
              <a
                href="#"
                rel="noopener"
              >
                PAYMENT METHODS
              </a>
            </p>
            <p>
              Choose from a variety of secure payment methods to complete your
              transactions with ease.
            </p>
          </div>
        </AboutContainer>
        <MottoContainer>
          At the heart of MultiMicro-Store lies a distinctive philosophy that
          transcends trends and embraces the essence of enduring style. Our
          collections are a harmonious blend of sophistication, versatility, and
          modernity, carefully curated to enhance your personal expression. We
          believe that fashion should empower, inspire, and reflect the unique
          narrative of every individual. MultiMicro-Store is not just about
          clothing; it's about embracing a lifestyle that embraces the artistry
          of fashion and the poetry of self-expression.
        </MottoContainer>
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

export default About;
