//TODO: CleanUp ->styled!!!
import { Link } from "react-router-dom";
import styled from "styled-components";

export const BestSellerContainer = styled.div`
  padding: calc(2vw + 1rem);

  @media screen and (min-width: 1200px) {
    padding: calc(4vw + 1rem) 200px;
  }
  @media screen and (min-width: 1600px) {
    padding: 150px 250px;
  }
`;
export const BestSellerTitle = styled.h2`
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

export const BreadcrumbLink = styled(Link)`
  /* font-size: 2rem;
  &:hover {
    color: darkblue;
    text-decoration: underline;
  } */
`;

export const StartStoreShopContainer = styled.div`
  .startimages {
    display: flex;
    margin: 0 auto;
    gap: 10px;
  }
  img {
    width: 100%;
    height: 400px;
  }
  @media screen and (min-width: 390px) {
    height: 70vh;
    margin: 0 calc(4vw + 3rem);
  }
  @media screen and (min-width: 810px) {
    height: 70vh;
    margin: 0 calc(4vw + 3rem);
  }
  @media screen and (min-width: 1200px) {
    height: 70vh;
    margin: 0 calc(4vw + 3rem);
  }
  @media screen and (min-width: 1600px) {
    height: 70vh;
    margin: 120px calc(6vw + 3rem);
    // margin: 120px 400px;
  }
`;

// TODO: turn SCSS -> styled
// h2.breadcrumb-nav {
//   padding: 1rem 3rem 1rem;
//   background-color: lightblue;
//   font-weight: 500;

//   a:hover {
//     color: white;
//   }
//   a {
//     background: linear-gradient(0deg, lightblue, #54b3d6 50%) no-repeat right
//       bottom / 0 var(--bg-h);
//     transition: background-size 550ms;
//     --bg-h: 200%;
//   }
//   a:where(:hover, :focus-visible) {
//     background-size: 100% var(--bg-h);
//     background-position-x: left;
//   }
// }

// div.breadcrumb {
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   padding: 0.5rem 3rem 0.5rem;
//   background-color: #4170e8;
// }
// // TEXT ANIMATION
// .animatedtext {
//   text-align: center;
//   // font-family: "Roboto";
//   font-weight: 600;
//   overflow: hidden;
//   -webkit-backface-visibility: hidden;
//   -webkit-perspective: 1000;
//   -webkit-transform: translate3d(0, 0, 0);

//   .adtext {
//     display: inline-block;
//     overflow: hidden;
//     white-space: nowrap;
//     @media screen and (max-width: 600px) {
//       font-size: 10px;
//     }
//   }

//   .adtext:first-of-type {
//     animation: showup 7s infinite;
//   }

//   .adtext:last-of-type {
//     width: 0px;
//     animation: reveal 7s infinite;
//   }

//   .adtext:last-of-type .adtextspan {
//     margin-left: -355px;
//     animation: slidein 7s infinite;
//   }

//   @keyframes showup {
//     0% {
//       opacity: 0;
//     }
//     20% {
//       opacity: 1;
//     }
//     80% {
//       opacity: 1;
//     }
//     100% {
//       opacity: 0;
//     }
//   }

//   @keyframes slidein {
//     0% {
//       margin-left: -800px;
//     }
//     20% {
//       margin-left: -800px;
//     }
//     35% {
//       margin-left: 0px;
//     }
//     100% {
//       margin-left: 0px;
//     }
//   }

//   @keyframes reveal {
//     0% {
//       opacity: 0;
//       width: 0px;
//     }
//     20% {
//       opacity: 1;
//       width: 0px;
//     }
//     30% {
//       width: 355px;
//     }
//     80% {
//       opacity: 1;
//     }
//     100% {
//       opacity: 0;
//       width: 355px;
//     }
//   }
// }
// // BESTSELLER
// .featured__container {
//   margin: 0 auto calc(7vw + 3rem);
//   text-align: center;
// }
// // BESTSELLER
// .bestseller__container {
//   width: 85%;
//   margin: calc(7vw + 3rem) auto;
//   text-align: center;
// }

// .bestseller {
//   padding: 0 2rem;
//   text-align: left;
//   min-height: 10vh;
//   font-size: 2.75rem;
// }
// // BRANDS
// .app__flex {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
// .app__brands {
//   // width: 80%;
//   flex-wrap: wrap;
//   // align-items: center;
//   margin-top: 2rem;

//   div {
//     width: 150px;
//     padding: 0 1.5rem;

//     img {
//       width: 100%;
//       height: auto;
//       object-fit: cover;
//       filter: grayscale(1);
//     }

//     &:hover {
//       img {
//         filter: grayscale(0);
//       }
//     }

//     @media screen and (min-width: 2000px) {
//       width: 210px;
//       margin: 2rem;
//     }

//     @media screen and (max-width: 450px) {
//       width: 120px;
//       margin: 1rem;
//     }
//   }

//   @media screen and (max-width: 800px) {
//     width: 100%;
//   }
// }
