import styled from "styled-components";

import { Link } from "react-router-dom";

export const FeaturedGrid = styled.div`
display: block;

  @media screen and (min-width: 1200px) {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(min(330px, 100%), 1fr));
  }
  .serena-card {
    border-radius: 4px;
    overflow: hidden;
    padding: 1rem 0;
    @media (min-width: 810px) and (max-width: 1199px) {
      padding: 1rem 6rem;
    }
  }

  .card-image {
    // height: 100%;
    // width: 100%;
    height: 500px;
    // width: 300px;
    @media (min-width: 810px) and (max-width: 1199px) {
      height: 800px;
      max-width: 1100px;
    }

    @media screen and (min-width: 1200px) {
      // height: 300px;
    }
    @media screen and (min-width: 1600px) {
      // height: 400px;
    }

    overflow: hidden;
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
      // height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .text {
    align-content: flex-start;
    align-items: flex-start;
    display: flex;
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 0px;
    height: auto;
    justify-content: flex-start;
    overflow: visible;
    padding: 0;
    position: relative;
    width: 100%;
    z-index: 1;

    a {
      font-family: "Afacad", "Afacad Placeholder", sans-serif;
      font-optical-sizing: auto;
      font-weight: 500;
      font-style: normal;

      font-size: 22px;
      // font-size: calc(3vw + 0.7rem);

      // letter-spacing: -0.02em;
      letter-spacing: 0em;
      line-height: 1.6em;
      paragraph-spacing: 20px;
      text-alignment: start;
      text-decoration: none;
      text-transform: capitalize;
      transition: color 0.3s cubic-bezier(0.44, 0, 0.56, 1) 0s;
      &:hover {
        text-decoration: underline;
      }
    }
    p {
      font-family: "Poppins", "Poppins Placeholder", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      letter-spacing: 0em;
      line-height: 1.6em;
      paragraph-spacing: 20px;
      text-alignment: start;
      text-decoration: none;
      text-transform: capitalize;
    }
  }
}
.serena {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // justify-content: stretch;

  // flex-shrink: 0;

  @media (min-width: 1200px) {
    // flex-direction: row;
    gap: 18px;
  }
  @media (min-width: 810px) and (max-width: 1199px) {
    flex-direction: column;
    align-content: center;
    align-items: center;
    margin: auto;
    max-width: 800px;
  }

  .serena-card {
    border-radius: 4px;
    overflow: hidden;
    padding: 1rem 0;
    @media (min-width: 810px) and (max-width: 1199px) {
      padding: 1rem 6rem;
    }
  }

  .card-image {
    height: 750px;
    width: 600px;
    @media (min-width: 810px) and (max-width: 1199px) {
      height: 750px;
      width: 600px;
    }

    @media screen and (min-width: 1200px) {
      // height: 300px;
    }
    @media screen and (min-width: 1600px) {
      // height: 400px;
    }

    overflow: hidden;
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
  }

  .text {
    align-content: flex-start;
    align-items: flex-start;
    display: flex;
    flex: none;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 0px;
    height: auto;
    justify-content: flex-start;
    overflow: visible;
    padding: 0;
    position: relative;
    width: 100%;
    z-index: 1;

    a {
      font-family: "Afacad", "Afacad Placeholder", sans-serif;
      font-optical-sizing: auto;
      font-weight: 500;
      font-style: normal;

      font-size: 22px;
      letter-spacing: 0em;
      line-height: 1.6em;
      paragraph-spacing: 20px;
      text-alignment: start;
      text-decoration: none;
      text-transform: capitalize;
      transition: color 0.3s cubic-bezier(0.44, 0, 0.56, 1) 0s;
      &:hover {
        text-decoration: underline;
      }
    }
    p {
      font-family: "Poppins", "Poppins Placeholder", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      letter-spacing: 0em;
      line-height: 1.6em;
      paragraph-spacing: 20px;
      text-alignment: start;
      text-decoration: none;
      text-transform: capitalize;
    }
  }
`;
