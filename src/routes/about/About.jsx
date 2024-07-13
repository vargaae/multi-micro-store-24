import { BreadcrumbNav, ButtonComponent, Contact } from "../../components";

import {
  ShopContainer,
  Title,
  ShopBreadcrumbNavContainer,
  ShopBreadcrumbLink,
  AboutContainer,
  ImageContainer,
  BrandContainer,
  InstagramContainer
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
          <div
            
            data-framer-name="Container"
            name="Container"
          >
            <div >
              <ImageContainer>
                <img
                  decoding="async"
                  sizes="max(min(max(100vw, 0px), 1600px), 0px)"
                  srcset="https://framerusercontent.com/images/xkSQZzf8aaWDeohirXzHK6tMCQ.jpg?scale-down-to=512 512w, https://framerusercontent.com/images/xkSQZzf8aaWDeohirXzHK6tMCQ.jpg?scale-down-to=1024 1024w, https://framerusercontent.com/images/xkSQZzf8aaWDeohirXzHK6tMCQ.jpg?scale-down-to=2048 2048w, https://framerusercontent.com/images/xkSQZzf8aaWDeohirXzHK6tMCQ.jpg?scale-down-to=4096 4096w, https://framerusercontent.com/images/xkSQZzf8aaWDeohirXzHK6tMCQ.jpg 6000w"
                  src="https://framerusercontent.com/images/xkSQZzf8aaWDeohirXzHK6tMCQ.jpg"
                  alt="About us picture"
                />
              </ImageContainer>
            </div>
          </div>
        </div>
        <AboutContainer>
            <div class="framer-x680zr" data-framer-name="Container" name="Container">
                <div class="framer-v54035">
                    <div class="framer-15fqveg" data-framer-component-type="RichTextContainer" >
                        <p class="framer-text framer-styles-preset-nkrknn" data-styles-preset="Uh_b25sw1">
                            <a class="framer-text" href="https://arredo.qodeinteractive.com/about-us/#" rel="noopener">SHOP ONLINE</a></p>
                            </div>
                            <div class="framer-a3uulj" data-framer-component-type="RichTextContainer">
                                <p class="framer-text framer-styles-preset-13aljqr" data-styles-preset="g14a8fKjc">Explore a vast collection of premium clothing from the comfort of your home.</p>
                                </div></div><div class="framer-1cdsszo">
                                    <div class="framer-1gi6p2r" data-framer-component-type="RichTextContainer" >
                                        <p class="framer-text framer-styles-preset-nkrknn" data-styles-preset="Uh_b25sw1" >
                                            <a class="framer-text" href="https://arredo.qodeinteractive.com/about-us/#" rel="noopener">FREE SHIPPING</a></p></div>
                                            <div class="framer-8drkvm" data-framer-component-type="RichTextContainer" >
                                                <p class="framer-text framer-styles-preset-13aljqr" data-styles-preset="g14a8fKjc">Enjoy the convenience of free shipping on all orders, nationwide.</p></div></div><div class="framer-6ieuky"><div class="framer-133yu3p" data-framer-component-type="RichTextContainer" ><p class="framer-text framer-styles-preset-nkrknn" data-styles-preset="Uh_b25sw1" ><a class="framer-text" href="https://arredo.qodeinteractive.com/about-us/#" rel="noopener">RETURN POLICY</a></p></div><div class="framer-1qrjnyi" data-framer-component-type="RichTextContainer" ><p class="framer-text framer-styles-preset-13aljqr" data-styles-preset="g14a8fKjc" >Your satisfaction is our priority. Return any product you are not satisfied with.</p></div></div><div class="framer-1nhzak7"><div class="framer-1uat3de" data-framer-component-type="RichTextContainer" ><p class="framer-text framer-styles-preset-nkrknn" data-styles-preset="Uh_b25sw1" ><a class="framer-text" href="https://arredo.qodeinteractive.com/about-us/#" rel="noopener">PAYMENT METHODS</a></p></div><div class="framer-xgpay5" data-framer-component-type="RichTextContainer" >
                                                    <p class="framer-text framer-styles-preset-13aljqr" data-styles-preset="g14a8fKjc" >Choose from a variety of secure payment methods to complete your transactions with ease.</p></div></div></div>
          <h4>
            At the heart of MultiMicro-Store lies a distinctive philosophy that
            transcends trends and embraces the essence of enduring style. Our
            collections are a harmonious blend of sophistication, versatility,
            and modernity, carefully curated to enhance your personal
            expression. We believe that fashion should empower, inspire, and
            reflect the unique narrative of every individual. MultiMicro-Store is not
            just about clothing; it's about embracing a lifestyle that embraces
            the artistry of fashion and the poetry of self-expression.
          </h4>
        </AboutContainer>
          <BrandContainer>
            <div >
                <img decoding="async" loading="lazy" src="https://framerusercontent.com/images/zBWNdmAieoTmcQCkIkTZ9rfnqo.svg" alt="" />
                </div>
            <div >
            <img decoding="async" loading="lazy" src="https://framerusercontent.com/images/u8WevV7mCKQBN8jeLHALsSQQs34.svg" alt="" />
                </div>
            <div >
            <img decoding="async" loading="lazy" src="https://framerusercontent.com/images/StsYHkCZHpy4eY8jsBCQEWc.svg" alt=""  />
                </div>
            <div >
            <img decoding="async" loading="lazy" src="https://framerusercontent.com/images/jOc8ocv3NkFD0PkOQbamqxXhuE.svg" alt="" />
                </div>
            <div >
            <img decoding="async" loading="lazy" src="https://framerusercontent.com/images/z336n0D2YdMY9XgDiBAU7XSW6s.svg" alt="" />
                </div>
            <div >
            <img decoding="async" loading="lazy" src="https://framerusercontent.com/images/WdroEkOLMZk4iQzRgxNWMhLTlY.svg" alt=""  />
                </div>
                </BrandContainer>

                        <InstagramContainer>
                            <div class="framer-nld3by" data-framer-component-type="RichTextContainer" >
                                <h2 class="framer-text framer-styles-preset-qt2kno" data-styles-preset="mmxZvMeNm" >Follow @serrenA</h2>
                                </div>
                                </div>
                                <div class="framer-1jc7d0">
                                    <div class="framer-1mm40pa-container">
                                        <a class="framer-SYe8c framer-ufjywf framer-v-ufjywf framer-bfib5d" data-framer-name="Variant 1" href="https://instagram.com" target="_blank" rel="noopener" tabindex="0"><div class="framer-adajaw"><div><img decoding="async" sizes="max(min(340px, 100vw) - 50px, 0px)" srcset="https://framerusercontent.com/images/loMMGmMx99iT3MTTxx1sRotu260.jpg?scale-down-to=1024 819w, https://framerusercontent.com/images/loMMGmMx99iT3MTTxx1sRotu260.jpg?scale-down-to=2048 1638w, https://framerusercontent.com/images/loMMGmMx99iT3MTTxx1sRotu260.jpg?scale-down-to=4096 3276w, https://framerusercontent.com/images/loMMGmMx99iT3MTTxx1sRotu260.jpg 3376w" src="https://framerusercontent.com/images/loMMGmMx99iT3MTTxx1sRotu260.jpg?scale-down-to=512" alt="" /></div></div><div class="framer-pk5she-container" >
                                            <div >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-68c487d3-20d5-4991-b1f9-ddfccf417b35, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></div></div></a></div><div class="framer-1rkryd9-container"><a class="framer-SYe8c framer-ufjywf framer-v-ufjywf framer-bfib5d" data-framer-name="Variant 1" href="https://instagram.com" target="_blank" rel="noopener" tabindex="0"><div class="framer-adajaw" ><div><img decoding="async" sizes="max(min(340px, 100vw) - 50px, 0px)" srcset="https://framerusercontent.com/images/M2WAUBTf1oy45GOhezNlrMFGrk.jpg?scale-down-to=1024 682w, https://framerusercontent.com/images/M2WAUBTf1oy45GOhezNlrMFGrk.jpg?scale-down-to=2048 1365w, https://framerusercontent.com/images/M2WAUBTf1oy45GOhezNlrMFGrk.jpg?scale-down-to=4096 2730w, https://framerusercontent.com/images/M2WAUBTf1oy45GOhezNlrMFGrk.jpg 3456w" src="https://framerusercontent.com/images/M2WAUBTf1oy45GOhezNlrMFGrk.jpg?scale-down-to=4096" alt=""/></div></div><div class="framer-pk5she-container" ><div ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-68c487d3-20d5-4991-b1f9-ddfccf417b35, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></div></div></a></div><div class="framer-drbuev-container"><a class="framer-SYe8c framer-ufjywf framer-v-ufjywf framer-bfib5d" data-framer-name="Variant 1" href="https://instagram.com" target="_blank" rel="noopener" tabindex="0" ><div class="framer-adajaw" ><div ><img decoding="async" sizes="max(min(340px, 100vw) - 50px, 0px)" srcset="https://framerusercontent.com/images/mw4Ie2Fs2QvK2MVyohtc6HRGw.jpg?scale-down-to=1024 682w, https://framerusercontent.com/images/mw4Ie2Fs2QvK2MVyohtc6HRGw.jpg?scale-down-to=2048 1365w, https://framerusercontent.com/images/mw4Ie2Fs2QvK2MVyohtc6HRGw.jpg?scale-down-to=4096 2730w, https://framerusercontent.com/images/mw4Ie2Fs2QvK2MVyohtc6HRGw.jpg 4000w" src="https://framerusercontent.com/images/mw4Ie2Fs2QvK2MVyohtc6HRGw.jpg?scale-down-to=4096" alt=""/></div></div><div class="framer-pk5she-container" ><div ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-68c487d3-20d5-4991-b1f9-ddfccf417b35, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></div></div></a></div><div class="framer-rjgxfc-container"><a class="framer-SYe8c framer-ufjywf framer-v-ufjywf framer-bfib5d" data-framer-name="Variant 1" href="https://instagram.com" target="_blank" rel="noopener" tabindex="0" ><div class="framer-adajaw" ><div ><img decoding="async" sizes="max(min(340px, 100vw) - 50px, 0px)" srcset="https://framerusercontent.com/images/sv4saN07BOwi4IdhAmljgHMlo.jpg?scale-down-to=1024 662w, https://framerusercontent.com/images/sv4saN07BOwi4IdhAmljgHMlo.jpg?scale-down-to=2048 1325w, https://framerusercontent.com/images/sv4saN07BOwi4IdhAmljgHMlo.jpg?scale-down-to=4096 2650w, https://framerusercontent.com/images/sv4saN07BOwi4IdhAmljgHMlo.jpg 2955w" src="https://framerusercontent.com/images/sv4saN07BOwi4IdhAmljgHMlo.jpg?scale-down-to=4096" alt=""/>
                                        </div></div>
                                        <div class="framer-pk5she-container" >
                                            <div >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-68c487d3-20d5-4991-b1f9-ddfccf417b35, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </div>
                                </div>
                                </a>
                                </div>
                                </InstagramContainer>
      </ShopContainer>
      <Contact />
    </>
  );
};

export default About;
