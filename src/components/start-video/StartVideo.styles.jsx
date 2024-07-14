// TODO: SET video textbox->mobile/tablet @media -> !fontsize

import { Link } from "react-router-dom";
import styled from "styled-components";

export const StartVideoContainer = styled.div`
  position: relative;
  @media screen and (min-width: 1600px) {
    height: 70vh;
    margin: 0 calc(4vw + 3rem);
  }
  .bg-vid {
    /* position: fixed; */

    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }
  /* min-height: 90vh;
  
  } */
`;

export const VideoTextBox = styled.div`
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  transform: none;
  z-index: 3;
  /* padding: 1.5rem; */
  margin: 0;
  position: absolute; /* 2 */
  // top: calc(50% - 110px); /* 3 */
  text-align: left;
  bottom: 1rem;
  left: 5rem; /* 3 */
  /* margin-right: -50%; */
  /* transform: translate(-50%, -50%); */
  color: #ffffff;

  /* font-size: calc(5vw + 1rem); */

  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.6em;
  text-decoration: none;
  text-transform: none; */
  
  font-size: 10px;
  @media screen and (max-width: 810px) {
   }
   @media screen and (min-width: 810px) {
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
  padding: 0.2em 0;

  font-size: calc(2vw + 0.5em);
  @media screen and (min-width: 810px) {
    padding: 1em 0;
    font-size: calc(2vw + 1rem);
  }

  font-family: "Afacad", "Afacad Placeholder", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.02em;
`;

export const VideoTextBoxParagraph = styled.p`
  max-width: calc(25vw + 5rem);
  /* max-width: 600px; */
  padding: 0;

  font-family: var(--font-family-shopinfo);
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 400;

  font-style: normal;

  letter-spacing: -0.02em;
  line-height: 1.6em;

  @media screen and (max-width: 550px) {
    font-size: 10px;
  }
  @media screen and (min-width: 810px) {
    font-size: 18px;
    // font-size: calc(1vw + 0.1rem);
    max-width: 650px;
  }
  @media screen and (min-width: 1600px) {
    // font-size: calc(1vw + 0.1rem);
    max-width: 800px;
  }
`;

export const VisitStoreLink = styled(Link)`
  padding-top: 0.1em;

  @media screen and (min-width: 810px) {
    padding-top: 1em;
  }
  /* height: 40px; */

  font-size: 1em;
  @media screen and (min-width: 810px) {
    font-size: 20px;
  }

  letter-spacing: -0.02em;

  font-family: "Afacad", "Afacad Placeholder", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 400;
  color: inherit;

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

    /* width: 100%; */
    width: calc(33vw + 1em);
    // TODO: unify media queries
    @media screen and (min-width: 810px) {
      width: calc(28vw + 1em);

      /* width: 69%; */
    }
    @media screen and (min-width: 1200px) {
      width: calc(25vw + 0.1em);

      /* width: 69%; */
    }
    @media screen and (min-width: 1600px) {
      font-size: 20px;

      width: calc(20vw + 0.1em);

      /* width: 66%; */
    }

    height: 2px;
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

  .arrow {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0 0.1rem;
    color: inherit;
  }
`;

export const VisitShopLink = styled(VisitStoreLink)`
  &:hover {
    color: var(--color-text);
  }

  &::before {
    content: "";
    width: calc(24vw + 1em);
    background-color: var(--color-text);
    // TODO: unify media queries
    @media screen and (min-width: 810px) {
      width: calc(20vw + 1em);
    }
    @media screen and (min-width: 1200px) {
      /* width: 51%; */
      width: calc(18vw + 0.1em);
    }
    @media screen and (min-width: 1600px) {
      /* width: 48%; */
      width: calc(14vw + 0.1em);
    }
  }
`;
