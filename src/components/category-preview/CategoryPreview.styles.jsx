import styled from "styled-components";

import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.2em 2px;
  margin: 1.2em 2px;

  @media screen and (min-width: 390px) {
    padding: 1.2em calc(1vw + 1rem);
  }
  @media screen and (min-width: 810px) {
    padding: 1.2em calc(1vw + 1rem);
  }
  @media screen and (min-width: 1200px) {
    padding: 1.2em calc(1vw + 1rem);
  }
  @media screen and (min-width: 1600px) {
    padding: 0px calc(10vw + 3rem);
  }
`;

export const Title = styled.h2`
  margin-bottom: 1rem;

  font-family: "Afacad", "Afacad Placeholder", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  letter-spacing: -0.02em;
  text-align: left;
  text-transform: uppercase;

  font-size: calc(3vw + 0.7rem);
`;

export const Preview = styled.div`
  margin: 2em auto;
  padding-bottom: 20px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2px;

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
