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

  margin-bottom: 5rem;
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

    margin-bottom: 0.5rem;
  }

  h3 {
    font-family: var(--font-family);
    font-size: 26px;
    font-weight: 500;
    line-height: 1.6em;
    text-transform: uppercase;
    color: #ffffff;
  }

  p {
    font-family: var(--font-family-shopinfo);
    color: #fff;
    margin: 0.5rem 0;
  }
`;

export const LinksDivContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  h4 {
    font-family: var(--font-family);
    font-size: 26px;
    font-weight: 500;
    line-height: 1.6em;
    text-transform: uppercase;
    color: #fff;
  }

  p {
    font-family: var(--font-family-shopinfo);
    color: #fff;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 1.6em;

    current-text-decoration: none;
    text-decoration: none;
    transition: color 0.3s cubic-bezier(0.44, 0, 0.56, 1) 0s;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FooterLink = styled(Link)`
  p {
    font-family: var(--font-family-shopinfo);
    color: #fff;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.02em;
    line-height: 1.6em;

    current-text-decoration: none;
    text-decoration: none;
    transition: color 0.3s cubic-bezier(0.44, 0, 0.56, 1) 0s;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  display: flex;
  flex: none;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;
  height: auto;
  justify-content: center;
  overflow: hidden;
  padding: 0;
  position: relative;
  width: auto;
`;

export const IconContainer = styled.div`
  display: contents;
  color: #ffffff;
  fill: #ffffff;
  width: 100%;
  height: 100%;

  svg {
    user-select: none;
    height: 32px;
    width: 32px;
    display: inline-block;
    fill: #ffffff;
    flex-shrink: 0;
  }
`;

export const CopyrightContainer = styled.div`
  margin-top: 2rem;
  text-align: center;
  width: 100%;

  p {
    font-family: var(Inter, Inter Placeholder, sans-serif, --font-family);
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.2em;
    color: #fff;
  }
`;
