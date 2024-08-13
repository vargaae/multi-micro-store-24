import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

const subColor = "grey";
const mainColor = "black";

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

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

export const ContactContainer = styled.div`
  /* Contact page: 
mobile-first: On screens that are 600px wide or more, there is one column in a row */
  margin: 1.6rem;
  justify-content: space-between;

  hr {
    margin: 3em;
  }

  /*  On screens that are 769px wide or more, there is one column in a row,
On screens that are 769px wide or more, make the columns in the middle */
  @media screen and (min-width: 769px) {
    display: flex;
    width: 769px;
    margin: 20px auto;
  }

  /*  On screens that are 900px wide or more, go from one column to two columns, 
so make the columns stack on top of each other instead of next to each other */
  @media screen and (min-width: 900px) {
    display: flex;
    width: 900px;
    margin: 3rem auto;
  }
`;

export const ContactTextContainer = styled.div`
  font-family: var(--font-family);
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -0.02em;
  text-align: left;
  line-height: 3em;

  h3 {
    margin: 10px 0;
    font-size: 46px;
  }
  h5 {
    font-size: 22px;
    text-transform: uppercase;
  }
  p {
    font-family: var(--font-family-shopinfo);
    font-size: 18px;
    paragraph-spacing: 20px;
  }

  /*  On screens that are 769px wide or more, there is one column in a row,
On screens that are 769px wide or more, make the columns in the middle */
  @media screen and (min-width: 769px) {
    display: flex;
    flex-direction: column;
    width: 350px;
  }

  /*  On screens that are 900px wide or more, go from one column to two columns, 
so make the columns stack on top of each other instead of next to each other */
  @media screen and (min-width: 900px) {
    width: 380px;
  }
`;

export const TextBox = styled.div`
  margin-bottom: 2em;
`;

export const ContactFormContainer = styled.div`
  font-family: "Afacad", "Afacad Placeholder", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -0.02em;

  /*  On screens that are 769px wide or more, there is one column in a row,
On screens that are 769px wide or more, make the columns in the middle */
  @media screen and (min-width: 769px) {
    display: flex;
    flex-direction: column;
    width: 350px;
  }

  /*  On screens that are 900px wide or more, go from one column to two columns, 
so make the columns stack on top of each other instead of next to each other */
  @media screen and (min-width: 900px) {
    width: 380px;
  }
`;
