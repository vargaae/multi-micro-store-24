import styled from "styled-components";

import { Link } from "react-router-dom";

export const ShopContainer = styled.div`
  @media screen and (max-width: 550px) {
    max-width: 440px;
    margin: 0 auto;
  }
`;

export const CategoryProductListContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* display: grid;
    column-gap: 4px;
    grid-template-columns: repeat(2, 1fr); */
  /* grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  row-gap: 50px;
*/
  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
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
