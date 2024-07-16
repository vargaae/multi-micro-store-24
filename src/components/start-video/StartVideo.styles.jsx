import styled from "styled-components";

import { Link } from "react-router-dom";

export const StartVideoContainer = styled.div`
  position: relative;

  .bg-vid {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  @media screen and (min-width: 1600px) {
    height: 70vh;
    margin: 0 calc(4vw + 3rem);
  }
`;

export const VideoTextBox = styled.div`
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  transform: none;
  z-index: 3;
  margin: 0;
  position: absolute; /* 2 */
  text-align: left;
  left: 3rem; /* 3 */
  color: #ffffff;

  bottom: 1em;

  @media screen and (min-width: 810px) {
    left: 5rem; /* 3 */
    bottom: 0;
  }
  @media screen and (min-width: 1200px) {
    bottom: 0; /* 3 */
  }
  @media screen and (min-width: 1600px) {
    bottom: 0;
  }
`;

export const VideoTextBoxTitle = styled.h3`
  font-family: var(--font-family);
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.02em;

  padding: 0.2em 0;
  font-size: calc(2vw + 0.5em);
  @media screen and (min-width: 550px) {
    padding: 1em 0;
    font-size: calc(2vw + 1rem);
  }
`;

export const VideoTextBoxParagraph = styled.p`
  padding: 0;

  font-family: var(--font-family-shopinfo);
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.02em;

  font-size: 10px;
  max-width: 250px;

  @media screen and (max-width: 390px) {
    font-size: 8px;
  }

  @media screen and (min-width: 390px) {
    font-size: 12px;
    max-width: 300px;
  }
  @media screen and (min-width: 550px) {
    font-size: 16px;
    max-width: 400px;
  }
  @media screen and (min-width: 810px) {
    padding: 0 0 0.5em 0;
    line-height: 1.6em;

    font-size: 18px;
    max-width: 650px;
  }
  @media screen and (min-width: 1200px) {
    padding: 0 0 2em 0;
  }
  @media screen and (min-width: 1600px) {
    max-width: 700px;
  }
`;

export const VisitStoreContainer = styled.div`
  display: flex;
  padding: 4px 0;
  @media screen and (min-width: 810px) {
    padding: 14px 0;
  }
  @media screen and (min-width: 1200px) {
    padding: 0 0 2em 0;
  }
`;

export const VisitStoreLinkContainer = styled(Link)`
  display: flex;
  gap: 10px;

  font-family: var(--font-family-numbers);
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0em;
  color: #ffffff;

  /* Animated link styling: Animate the line from the left */
  position: relative;
  text-decoration: none;

  &:hover {
    color: var(--color-prime);
  }

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: var(--color-prime);
    transform: scaleX(0);
    transform-origin: top left;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  font-size: 12px;

  @media screen and (max-width: 390px) {
    font-size: 8px;
  }
  @media screen and (min-width: 550px) {
    font-size: 1em;
  }

  @media screen and (min-width: 810px) {
    font-size: 18px;
    line-height: 1.6em;
    paragraph-spacing: 20px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1600px) {
    font-size: 20px;
  }
`;

export const VisitShopLinkContainer = styled(VisitStoreLinkContainer)`
  &:hover {
    color: var(--color-text);
  }

  &::before {
    content: "";
    background-color: var(--color-text);
  }
`;

export const VisitStoreLinkTextContainer = styled.p`
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  color: rgb(255, 255, 255);
  decoration: underline;
  transform: none;
  opacity: 1;
`;

export const VisitStoreArrowContainer = styled.div`
  display: contents;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0 0.1rem;
  color: inherit;

  svg {
    width: 20px;
    height: 20px;

    @media screen and (max-width: 390px) {
      width: 10px;
      height: 10px;
    }

    @media screen and (min-width: 810px) {
      width: 30px;
      height: 30px;
    }
    @media screen and (min-width: 1200px) {
      width: 36px;
      height: 36px;
    }
    @media screen and (min-width: 1600px) {
      width: 40px;
      height: 40px;
    }
  }
`;
