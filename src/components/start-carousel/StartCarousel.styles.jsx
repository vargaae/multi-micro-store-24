import styled, { keyframes } from "styled-components";

const cardEntrance = keyframes`
from {
    opacity: 0;
    filter: hue-rotate(180deg);
  }
  to {
    opacity: 1;
    filter: hue-rotate(0deg);
  }
`;

export const CarouselContainer = styled.div`
  // HOME>CAROUSEL animation and styling
  /* background-color: rgb(36, 243, 147); */
  animation: ${cardEntrance} 1000ms ease-out;
  animation-fill-mode: backwards;
  animation-delay: calc(1 * 100ms);

  @media screen and (min-width: 1200px) {
    height: calc(100vh - 192px);
    overflow: hidden;
  }
`;

export const CarouselTitle = styled.h1`
  place-content: center;
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-flow: row;
  gap: 10px;
  height: min-content;
  overflow: hidden;
  padding: 0px;
  position: relative;

  cursor: default;
  
  border-radius: 50%;
  opacity: 0.6;
  background: -moz-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* opera 11.10+ */
  background: -o-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* ie 10+ */
  background: -ms-radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 3% 25%,
    rgba(0, 40, 83, 1) 0%,
    rgba(4, 12, 24, 1) 25%
  );

  animation: ${cardEntrance} 700ms ease-out;
  animation-fill-mode: backwards;
  animation-delay: calc(3 * 100ms);

  z-index: 999;
  padding: 1.5rem;
  // text-align: center;
  margin: 0;
  position: absolute; /* 2 */
  // top: calc(50% - 110px); /* 3 */
  top: 50%;
  left: 50%; /* 3 */
  margin-right: -50%;
  transform: translate(-50%, -50%);
  /* 4 */

  text-transform: uppercase;
  
  font-family: "Afacad", "Afacad Placeholder", sans-serif;
  font-family-italic: "Afacad", "Afacad Placeholder", sans-serif;
  font-size: 2rem;
        // font-size: 80px;
        font-style: normal;
        font-style-italic: italic;
        font-weight: 700;
        font-weight-italic: 700;
        letter-spacing: 0em;
        line-height: 1em;
        paragraph-spacing: 40px;
        text-align: center;
        color: #ffffff;
        text-decoration: none;
        text-transform: uppercase;

  @media screen and (min-width: 1200px) {
    top: calc(50% - 282px);
    font-size: 4.3em;
  }
  @media screen and (max-width: 1200px) {
    img {
      height: 1.3em;
    }
  }
`;
