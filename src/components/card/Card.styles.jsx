import styled from "styled-components";

import { Link } from "react-router-dom";

export const CardContainer = styled.div`
  border-radius: 4px;
  overflow: hidden;
  padding: 1rem 0;
  @media (min-width: 810px) and (max-width: 1199px) {
    padding: 1rem 6rem;
  }
`;

export const CardImageContainer = styled.div`
  overflow: hidden;
  position: relative;

  &:hover {
    .secondImg {
      z-index: 2;
      transform: scale(1.1);
      transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  .mainImg {
    z-index: 1;
  }

  span {
    position: absolute;
    top: 5px;
    left: 5px;
    background-color: white;
    color: teal;
    padding: 3px 5px;
    z-index: 3;
    font-weight: 500;
    font-size: 12px;
  }
  // SET HEIGHT > RESPONSIVE
  height: 300px;

  @media screen and (min-width: 900px) {
    height: 350px;
  }
  @media screen and (min-width: 1600px) {
    height: 400px;
  }
`;

export const CardLink = styled(Link)``;

export const PricesContainer = styled.div`
  display: flex;
  gap: 20px;

  h3 {
    font-family: var(--font-family-numbers);
    // font-size: 20px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0em;
    line-height: 1.6em;
    text-align: start;
    text-decoration: none;

    &:first-child {
      color: gray;
      text-decoration: line-through;
    }

    @media screen and (min-width: 810px) {
      font-size: 20px;
    }
  }
`;

export const CardTitle = styled.h2`
  text-align: start;

  font-family: var(--font-family);
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-size: 1.2em;

  letter-spacing: 0em;
  line-height: 1.6em;
  text-align: start;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.3s cubic-bezier(0.44, 0, 0.56, 1) 0s;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (min-width: 810px) {
    font-size: 22px;
  }
`;
