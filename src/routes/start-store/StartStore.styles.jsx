import styled from "styled-components";

export const FeaturedContainer = styled.div`
  padding: 150px 1vw;

  @media screen and (min-width: 1200px) {
    padding: calc(4vw + 1rem) 1vw;
  }
  @media screen and (min-width: 1600px) {
    padding: 150px 150px;
  }
  @media screen and (min-width: 1800px) {
    padding: 150px 200px;
  }
`;

export const FeaturedTitle = styled.h2`
  font-family: var(--font-family);
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;

  font-size: 34px;

  letter-spacing: -0.02em;

  text-align: start;
  text-decoration: none;
  text-transform: uppercase;

  padding-bottom: 0.8em;

  font-style-bold: normal;
  font-style-bold-italic: italic;
  font-style-italic: italic;

  line-height: 1.2em;
  paragraph-spacing: 40px;

  @media screen and (min-width: 1200px) {
    font-size: 48px;
  }
  @media screen and (min-width: 1600px) {
    font-size: 60px;
  }
`;

export const BestSellerContainer = styled.div`
  padding: 2em;

  @media screen and (min-width: 810px) {
    padding: calc(2vw + 1em);
  }
  @media screen and (min-width: 1200px) {
    padding: calc(4vw + 1em) 200px;
  }
  @media screen and (min-width: 1600px) {
    padding: 150px 250px;
  }
`;

export const BestSellerTitle = styled.h2`
  margin: 0 auto;

  font-family: var(--font-family);
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -0.02em;
  text-decoration: none;
  text-transform: uppercase;
  paragraph-spacing: 40px;

  padding-bottom: calc(2vw + 2rem);

  display: flex;
  align-content: center;
  align-items: center;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 10px;
  justify-content: center;
  height: min-content;

  font-size: 34px;

  @media screen and (min-width: 810px) {
    flex-direction: row;

    justify-content: space-between;
    text-align: start;
    line-height: 1.2em;
  }
  @media screen and (min-width: 1200px) {
    font-size: 48px;
  }
  @media screen and (min-width: 1600px) {
    font-size: 60px;
  }
`;
