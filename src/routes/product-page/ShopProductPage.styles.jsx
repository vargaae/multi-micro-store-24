import { styled, keyframes } from "styled-components";

export const ProductPageTitle = styled.h2`
  font-family: var(--font-family);
  font-optical-sizing: auto;
  font-weight: 400;
  font-size: 2.6em;
  font-style: normal;
  letter-spacing: 0em;
  /* spacing: 40px; */
  text-align: start;
  text-decoration: none;
  text-transform: uppercase;

  &.mobileview {
    @media screen and (min-width: 900px) {
      display: none;
    }
  }

  &.screenview {
    font-size: 5em;
    line-height: 1.2em;

    @media screen and (max-width: 900px) {
      display: none;
    }
  }
`;

const l16 = keyframes`
   0% {
    background-position: -150% 0, -150% 0;
  }
  66% {
    background-position: 250% 0, -150% 0;
  }
  100% {
    background-position: 250% 0, 250% 0;
  }
`;

export const Loader = styled.div`
  height: 5px;
  /* width: 130px; */
  --c: no-repeat linear-gradient(var(--color-prime) 0 0);
  background: var(--c), var(--c), #d7b8fc;
  background-size: 60% 100%;
  animation: ${l16} 3s infinite;
`;

export const ProductContainer = styled.div`
  .product {
    margin: 0px auto 0px;
    @media screen and (min-width: 550px) {
      width: 70%;
      margin: 50px auto 20px;
    }
    /* margin: 0 4em; */
    gap: 15px;
    @media screen and (min-width: 900px) {
      gap: 50px;
    }
    @media screen and (min-width: 1600px) {
      width: 72%;
      margin: 50px auto 20px;
    }
    padding: 1.2em 2em;
    display: flex;
    flex-direction: column;

    .left {
      flex: 1;
      gap: 20px;

      .images {
        flex: 1;
        display: flex;
        flex-direction: row;

        img {
          width: 20%;
          height: auto;
          object-fit: cover;
          cursor: pointer;
          padding: 0 0.1rem 0 0;
          margin-bottom: 10px;
          /* border: 1px solid black;
          border-radius: 5px; */
        }
        .selectImg {
          flex: 1;
        }
        gap: 0.8em;
      }
      .mainImg {
        flex: 5;
        padding-bottom: 0.8em;

        img {
          width: 100%;
          height: auto;
          object-position: center top;
          object-fit: cover;
          image-rendering: auto;
          @media screen and (min-width: 1200px) {
            height: min(800px, 100vw);
            // FOR UNIFIED IMAGE SIZES:
            // height: calc((min(max(100vw, 0px), 1440px) - 60px) / 2.3);
            // width: calc((min(max(100vw, 0px), 1440px) - 60px) / 2.3);
          }
        }
      }
    }
    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      text-align: start;

      .price {
        font-family: var(--font-family-shopinfo);
        font-size: 20px;
        /* font-size: 1.5em; */
        font-style: normal;
        font-weight: 600;
        letter-spacing: 0em;
        line-height: 1.6em;
        paragraph-spacing: 20px;
        text-alignment: start;
        text-decoration: none;
      }

      p {
        font-family: var(--font-family-shopinfo);
        font-size: 1.2em;
        font-weight: 400;
        font-optical-sizing: auto;
        font-style: normal;
        letter-spacing: -0.02em;
        line-height: 1.6em;
        paragraph-spacing: 20px;
        text-align: start;
        text-decoration: none;
        strong {
          text-transform: uppercase;
          margin-top: 20px;
        }
      }

      .quantity {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 1.5rem;

        button {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: none;
        }
      }

      .add {
        width: 250px;
        padding: 10px;
        background-color: #2879fe;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        cursor: pointer;
        border: none;
        font-weight: 500;
      }

      .links {
        display: flex;
        gap: 20px;

        .item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #2879fe;
          font-size: 14px;
        }
      }

      .info {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 0px;

        /* font-size: 14px; */
        font-family: var(--font-family-shopinfo);
        font-size: 1.2em;
        font-weight: 400;
        font-optical-sizing: auto;
        font-style: normal;
        letter-spacing: -0.02em;
        line-height: 1.6em;
        paragraph-spacing: 20px;
        text-align: start;
        text-decoration: none;
        text-transform: uppercase;

        hr {
          width: 200px;
          border: 1px solid rgb(238, 237, 237);
        }
      }

      hr {
        // border: 1px solid rgb(238, 237, 237);
        border: 0 none rgb(238, 237, 237);
        padding-bottom: 2em;
      }
    }
    @media screen and (min-width: 900px) {
      flex-direction: row;
    }
  }
`;

// YOU MAY ALSO LIKE
export const FeaturedContainer = styled.div`
  padding: calc(2vw + 1rem);

  @media screen and (min-width: 1200px) {
    /* padding: calc(4vw + 1rem) 200px; */
    padding: calc(4vw + 1rem) 0;
  }
  @media screen and (min-width: 1600px) {
    padding: 150px 250px;
    /* padding: 150px 250px; */
  }
`;
export const FeaturedTitle = styled.h2`
  font-family: "Afacad", "Afacad Placeholder", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;

  /* font-size: 60px; */
  font-size: calc(3vw + 0.7rem);

  letter-spacing: -0.02em;
  /* letter-spacing: -1px; */

  text-align: start;
  text-decoration: none;
  text-transform: uppercase;

  /* padding-bottom: 60px; */
  padding-bottom: calc(2vw + 2rem);

  font-style-bold: normal;
  font-style-bold-italic: italic;
  font-style-italic: italic;

  line-height: 1.2em;
  paragraph-spacing: 40px;
  @media (max-width: 1199px) and (min-width: 0px) {
    /* font-size: 34px; */
    /* font-size: calc(4vw + 1rem); */
    font-weight: 500;
    line-height: 1.2em;
    paragraph-spacing: 40px;
  }
`;
