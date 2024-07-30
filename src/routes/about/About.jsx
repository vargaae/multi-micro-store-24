import { BreadcrumbNav, ButtonComponent, Contact } from "../../components";

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
  InstagramContainer,
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
            <div>
              <div>
                <p>
                  <a
                    href="https://arredo.qodeinteractive.com/about-us/#"
                    rel="noopener"
                  >
                    SHOP ONLINE
                  </a>
                </p>
              </div>
              <div>
                <p>
                  Explore a vast collection of premium clothing from the comfort
                  of your home.
                </p>
              </div>
            </div>
            <div>
              <div>
                <p>
                  <a
                    href="https://arredo.qodeinteractive.com/about-us/#"
                    rel="noopener"
                  >
                    FREE SHIPPING
                  </a>
                </p>
              </div>
              <div>
                <p>
                  Enjoy the convenience of free shipping on all orders,
                  nationwide.
                </p>
              </div>
            </div>
            <div>
              <div
                data-framer-component-type="RichTextContainer"
              >
                <p>
                  <a
                    href="https://arredo.qodeinteractive.com/about-us/#"
                    rel="noopener"
                  >
                    RETURN POLICY
                  </a>
                </p>
              </div>
              <div>
                <p>
                  Your satisfaction is our priority. Return any product you are
                  not satisfied with.
                </p>
              </div>
            </div>
            <div>
              <div>
                <p>
                  <a
                    href="https://arredo.qodeinteractive.com/about-us/#"
                    rel="noopener"
                  >
                    PAYMENT METHODS
                  </a>
                </p>
              </div>
              <div>
                <p>
                  Choose from a variety of secure payment methods to complete
                  your transactions with ease.
                </p>
              </div>
            </div>
          </div>
          <h4>
            At the heart of MultiMicro-Store lies a distinctive philosophy that
            transcends trends and embraces the essence of enduring style. Our
            collections are a harmonious blend of sophistication, versatility,
            and modernity, carefully curated to enhance your personal
            expression. We believe that fashion should empower, inspire, and
            reflect the unique narrative of every individual. MultiMicro-Store
            is not just about clothing; it's about embracing a lifestyle that
            embraces the artistry of fashion and the poetry of self-expression.
          </h4>
        </AboutContainer>
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

        <InstagramContainer>
          <div>
            <h2>Follow @multiMicroStore-24</h2>
          </div>
          <div>
            <div>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener"
                tabIndex="0"
              >
                <div>
                  <div>
                    <img
                      decoding="async"
                      sizes="max(min(340px, 100vw) - 50px, 0px)"
                      src="https://framerusercontent.com/images/loMMGmMx99iT3MTTxx1sRotu260.jpg?scale-down-to=512"
                      alt="Instagram image"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke='rgb(255, 255, 255)'
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener"
                tabIndex="0"
              >
                <div>
                  <div>
                    <img
                      decoding="async"
                      sizes="max(min(340px, 100vw) - 50px, 0px)"
                      src="https://framerusercontent.com/images/M2WAUBTf1oy45GOhezNlrMFGrk.jpg?scale-down-to=4096"
                      alt="Instagram image"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke='rgb(255, 255, 255)'
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener"
                tabIndex="0"
              >
                <div>
                  <div>
                    <img
                      decoding="async"
                      sizes="max(min(340px, 100vw) - 50px, 0px)"
                      src="https://framerusercontent.com/images/mw4Ie2Fs2QvK2MVyohtc6HRGw.jpg?scale-down-to=4096"
                      alt="Instagram image"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke='rgb(255, 255, 255)'
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener"
                tabIndex="0"
              >
                <div>
                  <div>
                    <img
                      decoding="async"
                      sizes="max(min(340px, 100vw) - 50px, 0px)"
                      src="https://framerusercontent.com/images/sv4saN07BOwi4IdhAmljgHMlo.jpg?scale-down-to=4096"
                      alt="Instagram image"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke='rgb(255, 255, 255)'
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </InstagramContainer>
      </ShopContainer>
      <Contact />
    </>
  );
};

export default About;
