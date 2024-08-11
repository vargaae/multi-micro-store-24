import styled from "styled-components";

import { Link } from "react-router-dom";

export const ShopBreadcrumbNavContainer = styled.div`
  font-family: var(--font-family-shopinfo);
  /* 
  Calculating sizes for this Header
  */
  font-size: calc(1vw + 0.7rem);
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.6em;
  paragraph-spacing: 20px;
  text-align: start;
  color: #ffffff;
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

export const ListContainer = styled.div`
  display: block;

  @media screen and (min-width: 1200px) {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(min(330px, 100%), 1fr));
  }
`;
