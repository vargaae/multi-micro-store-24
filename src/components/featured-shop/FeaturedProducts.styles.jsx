import styled from "styled-components";

export const FeaturedGrid = styled.div`
  display: block;

  .card-image {
    width: 100%;

    @media screen and (min-width: 580px) {
      height: 600px;
    }
    @media (min-width: 810px) and (max-width: 1199px) {
      height: 750px;
    }
    @media (min-width: 1200px) and (max-width: 1599px) {
      width: 100%;
    }
    @media screen and (min-width: 1200px) {
      height: 400px;
    }
  }
  @media screen and (min-width: 1200px) {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
  }
  @media screen and (min-width: 1600px) {
    grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  }
`;