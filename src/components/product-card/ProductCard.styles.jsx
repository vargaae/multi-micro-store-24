import styled from "styled-components";

import { Link } from "react-router-dom";

export const ProductCardContainer = styled.div`
  // height: 500px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  // margin: 0 0 10px;

  @media screen and (max-width: 390px) {
    // height: 350px;
    // width: 90px;
  }

  @media screen and (min-width: 1200px) {
    padding: 2em 0;
  }

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
    border-radius: 0.25rem;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  .productpagelink {
    color: transparent;
  }

  &:hover {
    transition: transform 8s cubic-bezier(0.25, 0.45, 0.45, 0.95);

    opacity: 1;
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
      z-index: 2;
    }
    .productpagelink {
      width: 100%;
      height: 100%;

      position: absolute;
      z-index: 1;
      color: transparent;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  font-size: 14px;

  margin: 5px;

  @media screen and (min-width: 550px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1600px) {
    // flex-direction: row;
    // justify-content: space-between;
  }
`;

export const Name = styled(Link)`
  width: 90%;

  justify-content: space-between;

  text-align: start;

  font-family: var(--font-family);
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;

  letter-spacing: 0em;
  line-height: 1.6em;
  text-align: start;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.3s cubic-bezier(0.44, 0, 0.56, 1) 0s;
  z-index: 2;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (min-width: 810px) {
    font-size: 22px;
  }
`;

export const Price = styled.span`
  width: 10%;

  font-family: var(--font-family-numbers);
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0em;
  line-height: 1.6em;
  text-align: start;
  text-decoration: none;

  @media screen and (min-width: 810px) {
    font-size: 20px;
  }
`;
