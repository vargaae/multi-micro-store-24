import styled from "styled-components";

import { Link } from "react-router-dom";

export const Title = styled.h2`
  font-family: "Afacad", "Afacad Placeholder", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;

  font-size: 42px;
  /* 
  Calculating sizes for this Header
  font-size: calc(3vw + 0.7rem); 
  */

  letter-spacing: -0.02em;

  margin: 1rem auto;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 1199px) and (min-width: 810px) {
    font-size: 60px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 80px;
  }
  @media screen and (min-width: 1600px) {
    font-size: 110px;
  }
`;

export const ShopBreadcrumbNavContainer = styled.div`
  font-family: var(--font-family-shopinfo);
  /* 
  Calculating sizes for this Header
  */
  font-size: calc(1vw + 0.7rem);
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.6em;
  paragraph-spacing: 20px;
  text-align: start;
  color: #ffffff;
  text-transform: uppercase;

  place-content: center;
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-flow: row;
  gap: 10px;
  height: min-content;
  overflow: hidden;
  padding: 0px 0px 120px;
  position: relative;

  svg {
    width: calc(1vw + 0.6rem);
    height: calc(1vw + 0.6rem);
  }
`;

export const ShopBreadcrumbLink = styled(Link)`
  background: linear-gradient(0deg, lightblue, #54b3d6 50%) no-repeat right
    bottom / 0 var(--bg-h);
  transition: background-size 550ms;
  --bg-h: 200%;
  &:hover {
    color: white;
  }
  &:where(:hover, :focus-visible) {
    background-size: 100% var(--bg-h);
    background-position-x: left;
  }
`;

export const ShopContainer = styled.div`
  @media screen and (min-width: 1200px) {
    margin: 0 auto 5em;
  }
`;

export const CategoryProductListContainer = styled.div`
  margin: 0 auto 3em;
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  /* For layout of 4 columns of images with the same sizes:
  grid-template-columns: repeat(4, 1fr); 
  */
  column-gap: 12px;
  row-gap: 50px;

  @media screen and (min-width: 810px) {
    column-gap: 20px;
  }

  @media screen and (min-width: 1200px) {
    margin: 0 auto 5em;
    padding: 5em;
    img {
      height: calc((min(max(100vw, 0px), 1440px) - 60px) / 2.3);
    }
  }
`;
