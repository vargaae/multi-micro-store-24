import styled from "styled-components";

import { Link } from "react-router-dom";

export const BreadcrumbNavContainer = styled.div`
  font-family: var(--font-family-shopinfo);
  font-size: 1em;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.6em;
  text-align: start;
  color: var(--color-prime);

  place-content: center;
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-flow: row;
  gap: 10px;
  height: min-content;
  overflow: hidden;
  position: relative;

  svg {
    width: 14px;
    height: 14px;
  }
  padding: 1rem 3rem 1rem;
  background-color: lightblue;
  font-weight: 500;

  @media screen and (min-width: 1200px) {
    font-size: 18px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const BreadcrumbLink = styled(Link)`
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
