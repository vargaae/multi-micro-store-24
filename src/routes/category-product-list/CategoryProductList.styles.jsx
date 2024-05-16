import styled from "styled-components";

import { Link } from "react-router-dom";

export const ShopContainer = styled.div`
  @media screen and (max-width: 550px) {
    width: 440px;
    margin: 0 auto;
  }
`;

export const CategoryProductListContainer = styled.div`
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  column-gap: 4px;
  row-gap: 50px;

  @media screen and (min-width: 900px) {
    column-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 2rem;
  text-align: left;
  text-transform: uppercase;
`;

export const CategoryTitleLink = styled(Link)`
  cursor: pointer;
  &:hover {
    color: darkblue;
  }
`;
