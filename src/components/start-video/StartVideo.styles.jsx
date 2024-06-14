// TODO: SET video textbox->mobile/tablet @media + arrow + underline hover animation

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
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;
  transform: none;
  z-index: 999;
  /* padding: 1.5rem; */
  margin: 0;
  position: absolute; /* 2 */
  // top: calc(50% - 110px); /* 3 */
  text-align: left;
  bottom: 5rem;
  left: 5rem; /* 3 */
  /* margin-right: -50%; */
  /* transform: translate(-50%, -50%); */
  color: #ffffff;

  /* font-size: calc(5vw + 1rem); */

  /* font-size: 2rem; */
  /* font-family: "Montserrat", "Montserrat Placeholder", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.6em;
  text-decoration: none;
  text-transform: none; */
`;

export const VideoTextBoxTitle = styled.h3`
  padding: 2rem 0;
  font-size: calc(2vw + 1rem);

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
  /* font-size: 18px; */
  font-size: calc(1vw + 0.1rem);

  font-family: "Montserrat", "Montserrat Placeholder", sans-serif;
  /* font-family: "Montserrat", sans-serif; */
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 400;

  font-style: normal;

  letter-spacing: -0.02em;
  line-height: 1.6em;
  text-decoration: none;
  text-transform: none;
`;

export const VisitShopLink = styled(Link)`
  .arrow {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0 1rem;
  }
  height: 40px;
  color: #ffffff;
  padding: 2rem 0;

  font-size: calc(1vw + 0.5rem);

  font-family: "Afacad", "Afacad Placeholder", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.02em;

  &:hover {
    text-decoration: underline;
  }
`;
