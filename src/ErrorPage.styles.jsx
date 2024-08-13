import { styled, keyframes } from "styled-components";

import { Link } from "react-router-dom";

export const ErrorPageContainer = styled.div`
  padding-top: 10px;
`;

export const ShopBreadcrumbNavContainer = styled.div`
  font-family: var(--font-family-shopinfo);
  font-size: calc(1vw + 0.7rem);
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.6em;
  paragraph-spacing: 20px;
  text-align: start;
  text-transform: uppercase;

  place-content: center;
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px 0px 60px;

  @media screen and (min-width: 1200px) {
    padding: 0px 0px 120px;
    flex-direction: row;
    flex: 0 0 auto;
    flex-flow: row;

    h5 {
      font-size: 14px;
    }
  }

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

// 404-glitch keyframes
const glitch = keyframes`
   2%,
    64% {
      transform: translate(2px, 0) skew(0deg);
    }
    4%,
    60% {
      transform: translate(-2px, 0) skew(0deg);
    }
    62% {
      transform: translate(0, 0) skew(5deg);
    }
`;

const glitchTop = keyframes`
    2%,
    64% {
      transform: translate(2px, -2px);
    }
    4%,
    60% {
      transform: translate(-2px, 2px);
    }
    62% {
      transform: translate(13px, -1px) skew(-13deg);
    }
`;

const glitchBottom = keyframes`
2%,
    64% {
      transform: translate(-2px, 0);
    }
    4%,
    60% {
      transform: translate(-2px, 0);
    }
    62% {
      transform: translate(-22px, 5px) skew(21deg);
    }
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  color: #fff;

  font-size: 96px;
  font-family: "Fira Mono", monospace;
  font-weight: 400;
  font-style: normal;

  letter-spacing: -7px;

  div {
    animation: ${glitch} 1s linear infinite;
  }

  div:before,
  div:after {
    content: attr(title);
    position: absolute;
    left: 0;
  }

  div:before {
    animation: ${glitchTop} 1s linear infinite;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  }

  div:after {
    animation: ${glitchBottom} 1.5s linear infinite;
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  }
`;
