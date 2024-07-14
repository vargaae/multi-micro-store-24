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

export const ImageContainer = styled.div`
  height: 300px;
  inset: 0px;
  margin: auto;

  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-position: center top;
    object-fit: cover;
    image-rendering: auto;

    // height: max(min(max(100vw, 0px), 1600px), 0px);
    // width: max(min(max(100vw, 0px), 1600px), 0px);
  }

  @media screen and (min-width: 550px) {
    height: 400px;
  }
  @media screen and (min-width: 810px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1600px) {
    width: 98%;
  }
`;

export const AboutContainer = styled.div`
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  transform: none;

  h4 {
    text-alignment: center;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-position: center center;
    object-fit: contain;
    image-rendering: auto;
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const BrandContainer = styled.div`
  padding: 4em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3em;
  
  @media screen and (min-width: 810px) {
    flex-direction: row;
    gap: 1em;
  }
`;

export const BrandLogoContainer = styled.div`
  padding: 0 1em;
  display: flex;
  justify-content: center;

  
  @media screen and (min-width: 810px) {
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-position: center center;
      object-fit: contain;
      image-rendering: auto;
    }
    }
`;

export const InstagramContainer = styled.div`
  padding: 4em 0;
  display: flex;
  justify-content: center;
  gap: 4em;

  @media screen and (min-width: 1200px) {
  }
`;
