import styled from "styled-components";

import { Link } from "react-router-dom";

export const CarouselContainer = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  padding: 0.1rem;

  font-family: "Afacad", "Afacad Placeholder", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  letter-spacing: -0.02em;
`;

export const CarouselItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  // color: white;
  margin: 0.7rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: rgb(255, 255, 255, 0.9);
  // background-color: rgba(0, 0, 40, 0.6);
  // background-color: rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  // BOX-SHADOW
  -webkit-box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.75);

  img {
    border-radius: 1rem;
  }
`;
