import styled from "styled-components";

export const FeaturedGrid = styled.div`
  display: block;
  padding: 0 50px;

  .card-image {
    width: 100%;

    @media screen and (min-width: 580px) {
      // height: 800px;
    }
    @media (min-width: 810px) and (max-width: 1199px) {
      // height: 650px;
    }
    @media (min-width: 1200px) and (max-width: 1599px) {
      width: 100%;
    }
    @media screen and (min-width: 1200px) {
      height: 300px;
    }
  }
  @media screen and (min-width: 810px) {
      padding: 0 200px;

  }
  @media screen and (min-width: 1200px) {
    padding: 0;

    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
  }
  @media screen and (min-width: 1600px) {
    grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  }
`;