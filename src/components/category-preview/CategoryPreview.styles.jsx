// TODO: set CategoryPreviewContainer padding
import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0 calc(4vw + 1rem);

  @media screen and (min-width: 1600px) {
    padding: 0px calc(10vw + 3rem);
    /* padding: 0px 250px; */
  }

  /* width: 450px; */
  /* @media screen and (max-width: 550px) {
    width: 440px;
    margin: 1rem auto;
  } */
`;

export const Title = styled.h2`
font-family: "Afacad", "Afacad Placeholder", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;

  /* font-size: 60px; */
  font-size: calc(3vw + 0.7rem);

  letter-spacing: -0.02em;

  /* font-size: 28px; */
  margin-bottom: 1rem;
  text-align: left;
  text-transform: uppercase;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); */
  column-gap: 12px;

  @media screen and (min-width: 769px) {
    column-gap: 18px;
  }
`;

export const CategoryTitleLink = styled(Link)`
  cursor: pointer;
  &:hover {
    color: darkblue;
  }
`;
