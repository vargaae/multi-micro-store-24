//TODO: CleanUp ->styled!!!
import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContactContainer = styled.div`
  padding: 60px 0;

  // font-size: calc(1vw + 1rem);
  font-size: 2em;

  font-family: "Afacad", "Afacad Placeholder", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -1px;

  background-color: #4170e8;
  color: white;
`;

export const ContactTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  span {
    flex: 3;
  }
  .mail {
    flex: auto;
  }

  button {
    // flex: 1;
    text-align: start;
  }

  @media (max-width: 809px) and (min-width: 0px) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 810px) {
    display: flex;
    justify-content: space-around;
    font-size: 1.2em;

    button {
      margin-right: 6em;
    }
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.3em;
    button {
      margin-right: 6em;
    }
  }
  @media screen and (min-width: 1600px) {
    font-size: 1.5em;
  }
`;

// export const ContactContainer = styled.div`
//   // align-content: center;
//   // align-items: space-between;
//   display: flex;
//   // flex-direction: row;
//   flex-wrap: nowrap;
//   gap: 10px;
//   height: auto;
//   justify-content: space-between;
//   overflow: hidden;
//   padding: 60px 0;
//   position: relative;
//   font-size: calc(1vw + 1rem);

//   font-family: "Afacad", "Afacad Placeholder", sans-serif;
//   font-optical-sizing: auto;
//   font-weight: 500;
//   font-style: normal;
//   letter-spacing: -1px;

//   background-color: #4170e8;
//   color: white;
//   @media (max-width: 1199px) and (min-width: 0px) {
//   }
//   @media screen and (min-width: 1200px) {
//   }
//   @media screen and (min-width: 1600px) {
//   }
// `;

// export const ContactTitle = styled.div`
//   align-items: center;

//   @media (max-width: 1199px) and (min-width: 0px) {
//     display: flex;
//     flex-direction: column;
//     gap: 30px;
//   }
//   @media screen and (min-width: 1200px) {
//     display: flex;
//     justify-content: space-between;
//     // font-size: 60px;
//   }
//   @media screen and (min-width: 1600px) {
//     display: flex;
//     justify-content: space-between;
//     // font-size: 60px;
//   }
// `;
