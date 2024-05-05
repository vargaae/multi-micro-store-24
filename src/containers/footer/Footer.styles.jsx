import styled from "styled-components";

import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 6rem;

  @media screen and (max-width: 700px) {
    padding: 4rem;
  }

  @media screen and (max-width: 550px) {
    padding: 4rem 2rem;
  }
`;

export const Heading = styled.div`
  width: 100%;
  text-align: center;

  margin-bottom: 3rem;

  h1 {
    font-family: var(--font-family);
    font-weight: 800;
    font-size: 64px;
    line-height: 75px;
    // GRADIENT TEXT:
    background: var(--gradient-text);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: 850px) {
      font-size: 44px;
      line-height: 50px;
    }

    @media screen and (max-width: 550px) {
      font-size: 34px;
      line-height: 42px;
    }
    @media screen and (max-width: 400px) {
      font-size: 27px;
      line-height: 38px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem;
  border: 1px solid #fff;
  text-align: center;

  margin-bottom: 10rem;
  cursor: pointer;

  a {
    font-size: 18px;
    font-family: var(--font-family);
    line-height: 21px;
    color: #fff;
    word-spacing: 2px;
  }

  p {
    @media screen and (max-width: 550px) {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;

  width: 100%;
  text-align: left;

  div {
    width: 250px;
    margin: 1rem;

    @media screen and (max-width: 550px) {
      margin: 1rem 0;
    }
  }
`;

export const LinksLogoContainer = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 118px;
    height: 30px;

    margin-bottom: 1rem;
  }

  p {
    font-family: var(--font-family);
    font-size: 12px;
    line-height: 15px;
    color: #fff;
  }
`;

export const LinksDivContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  h4 {
    font-size: 14px;
    line-height: 17px;
    font-family: var(--font-family);
    color: #fff;

    margin-bottom: 0.9rem;
  }

  p {
    font-size: 12px;
    line-height: 15px;
    font-family: var(--font-family);
    color: #fff;

    margin: 0.5rem 0;
    cursor: pointer;
  }
`;

export const CopyrightContainer = styled.div`
  margin-top: 2rem;
  text-align: center;
  width: 100%;

  p {
    font-size: 12px;
    font-family: var(--font-family);
    line-height: 15px;
    color: #fff;
  }
`;
