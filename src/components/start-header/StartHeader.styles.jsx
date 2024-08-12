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

export const BannerContainer = styled.div`
  // BANNER>CAROUSEL animation and styling
  /* background-color: rgb(36, 243, 147); */
  animation: ${cardEntrance} 1000ms ease-out;
  animation-fill-mode: backwards;
  animation-delay: calc(1 * 100ms);

  /* banner styles:
  background-image: url(./); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 65vh;

  /* @media screen and (min-width: 1200px) {
    height: calc(100vh - 110px);
  } */
`;
export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  justify-content: space-around;
`;

export const CarouselContainer = styled.div`
  // BANNERCONTENT>CAROUSEL animation and styling
  /* background-color: rgb(36, 243, 147); */
  animation: ${cardEntrance} 1000ms ease-out;
  animation-fill-mode: backwards;
  animation-delay: calc(1 * 100ms);

  padding: 0.4rem;

  display: flex;
  height: 40%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const CarouselTitle = styled.h1`
  cursor: default;
  color: #ffffff;
  font-size: calc(5vw + 1rem);
  /* font-size: 110px; */

  font-family: "Afacad", "Afacad Placeholder", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 800;

  letter-spacing: 10px;

  border-radius: 20px;
  margin-bottom: 15px;

  opacity: 0.3;
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

  /* z-index: 999; */
  padding: calc(1vw + 0.8rem);
`;
