import styled from "styled-components";

export const CarouselContainer = styled.div`
  // HOME>CAROUSEL styling
  @media screen and (min-width: 1200px) {
    height: calc(100vh - 110px);
    overflow: hidden;
  }
`;

export const CarouselTitle = styled.h1`
  color: #ffffff;
  font-size: 2rem;
  letter-spacing: 7px;
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

  @media screen and (min-width: 1200px) {
    top: calc(50% - 220px);
    font-size: 3.5rem;
  }
  @media screen and (max-width: 1200px) {
    img {
      height: 1.3rem;
    }
  }
`;
