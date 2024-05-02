import styled from "styled-components";

import { Link } from "react-router-dom";

export const ShopContainer = styled.div`
  padding: 20px 40px;
  margin-bottom: 1rem;

  @media screen and (min-width: 1200px) {
    width: 55%;
    margin: 0px auto 20px;
  }
`;

export const CategoryProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
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
