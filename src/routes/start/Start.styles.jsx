import styled, { keyframes } from "styled-components";

import { Link } from "react-router-dom";

const showup = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const slidein = keyframes`
  0% {
    margin-left: -800px;
  }
  20% {
    margin-left: -800px;
  }
  35% {
    margin-left: 0px;
  }
  100% {
    margin-left: 0px;
  }
`;

const reveal = keyframes`
  0% {
    opacity: 0;
    width: 0px;
  }
  20% {
    opacity: 1;
    width: 0px;
  }
  30% {
    width: 355px;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    width: 355px;
  }
`;

export const AnimatedContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0.5rem 3rem 0.5rem;
  background-color: #4170e8;

  // TEXT ANIMATION
  text-align: center;
  font-family: var(--font-family-shopinfo);
  letter-spacing: -0.02em;
  line-height: 1.6em;
  overflow: hidden;
  backface-visibility: hidden;
  perspective: 1000;
  transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  -webkit-transform: translate3d(0, 0, 0);

  font-weight: 500;
  font-size: 12px;

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }

  .adtext {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
  }

  .adtext:first-of-type {
    animation: ${showup} 7s infinite;
  }

  .adtext:last-of-type {
    width: 0px;
    animation: ${reveal} 7s infinite;
    @media screen and (max-width: 600px) {
      display: none;
    }
  }

  .adtext:last-of-type .adtextspan {
    margin-left: -355px;
    animation: ${slidein} 7s infinite;
  }
`;

export const BrandsContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  div {
    width: 150px;
    padding: 0 1.5rem;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      filter: grayscale(1);
    }

    &:hover {
      img {
        filter: grayscale(0);
      }
    }

    @media screen and (max-width: 450px) {
      width: 120px;
      margin: 1rem;
    }

    @media screen and (min-width: 2000px) {
      width: 210px;
      margin: 2rem;
    }
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const BestSellerContainer = styled.div`
  padding: 2em;

  @media screen and (min-width: 810px) {
    padding: calc(2vw + 1em);
  }
  @media screen and (min-width: 1200px) {
    padding: calc(4vw + 1em) 200px;
  }
  @media screen and (min-width: 1600px) {
    padding: 150px 250px;
  }
`;

export const BestSellerTitle = styled.h2`
  margin: 0 auto;

  font-family: var(--font-family);
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -0.02em;
  text-decoration: none;
  text-transform: uppercase;
  paragraph-spacing: 40px;

  padding-bottom: calc(2vw + 2rem);

  display: flex;
  align-content: center;
  align-items: center;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 10px;
  justify-content: center;
  height: min-content;

  font-size: 34px;

  @media screen and (min-width: 810px) {
    flex-direction: row;

    justify-content: space-between;
    text-align: start;
    line-height: 1.2em;
  }
  @media screen and (min-width: 1200px) {
    font-size: 48px;
  }
  @media screen and (min-width: 1600px) {
    font-size: 60px;
  }
`;

export const StartNavigationContainer = styled.div`
  margin: 1rem auto;

  @media screen and (min-width: 390px) {
    margin: calc(4vw + 3rem) auto;
  }
  @media screen and (min-width: 810px) {
    margin: calc(4vw + 3rem) auto;
  }
  @media screen and (min-width: 1200px) {
    margin: calc(4vw + 3rem) auto;
  }
  @media screen and (min-width: 1600px) {
    padding: 120px auto;
  }
`;
export const StartStoreShopContainer = styled.div`
  padding: 30px 0;
  margin: 0 auto;

  @media screen and (max-width: 390px) {
    margin: 0 4px;
  }
  @media screen and (min-width: 390px) {
    margin: 0 10px;
  }
  @media screen and (min-width: 550px) {
    margin: 0 calc(4vw + 3rem);
    padding: 60px 0;
  }
  @media screen and (min-width: 810px) {
    margin: 0 calc(4vw + 3rem);
  }
  @media screen and (min-width: 1200px) {
    margin: 0 calc(2vw + 1rem);
  }
  @media screen and (min-width: 1600px) {
    margin: 120px calc(8vw + 6em);
  }
`;

export const StartShopImages = styled.div`
  margin: 0 auto;
  gap: 10px;
  overflow: hidden;

  @media screen and (min-width: 1200px) {
    display: flex;
    align-content: center;
    align-items: center;
    flex: none;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 18px;
    height: min-content;
    justify-content: flex-start;
    padding: 0;
    position: relative;
    width: 100%;
  }

  img {
    width: 100%;
    height: min(650px, 100vw);
    object-fit: cover;
    padding-bottom: 24px;
  }
`;

export const StartStoreImages = styled(StartShopImages)`
  img {
    height: min(600px, 100vw);
  }
`;

export const StartShopImage = styled(Link)`
  flex: 50%;

  &:hover {
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    opacity: 1;
    img {
      opacity: 0.7;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`;
