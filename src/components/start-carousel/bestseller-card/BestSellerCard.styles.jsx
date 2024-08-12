import styled from "styled-components";

import { Link } from "react-router-dom";

export const BestsellerCardContainer = styled.div`
  margin: 0.2rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
`;

export const CardImageContainer = styled.div`
  height: calc(18vw + 3rem);
  position: relative;

  &:hover {
    .secondImg {
      z-index: 2;
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
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
`;

export const CardLink = styled(Link)``;

export const PricesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 6px;
  text-align: start;

  h3 {
    font-family: var(--font-family-numbers);
    font-weight: 500;
    font-style: normal;
    letter-spacing: 0em;
    line-height: 1.6em;
    text-decoration: none;
    font-size: 0.8em;

    @media screen and (min-width: 810px) {
      font-size: 1.2em;
    }

    &:first-child {
      color: gray;
      text-decoration: line-through;
    }
  }
`;

export const CardTitle = styled.h2`
  font-family: var(--font-family);
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;

  @media screen and (min-width: 810px) {
    // font-size: 22px;
    font-size: 1.4em;
  }

  letter-spacing: 0em;
  line-height: 1.6em;
  text-align: start;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.3s cubic-bezier(0.44, 0, 0.56, 1) 0s;

  &:hover {
    text-decoration: underline;
  }
`;
