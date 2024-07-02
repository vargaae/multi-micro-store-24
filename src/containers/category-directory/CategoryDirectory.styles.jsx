import { styled } from "styled-components";

import { Link } from "react-router-dom";

export const DirectoryContainer = styled.div`
  @media screen and (min-width: 600px) {
    display: flex;
    height: 80vh;
    gap: 10px;
    margin: 10px;
  }
`;

export const DirectoryColContainer = styled.div`
  @media screen and (min-width: 600px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    &:nth-child(3) {
      flex: 2;
    }
  }
`;

export const DirectoryLastItemContainer = styled.div`
  @media screen and (min-width: 600px) {
    flex: 1;
    display: flex;
    gap: 10px;
    position: relative;
    overflow: hidden;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ $imgurl }) => `url(${$imgurl})`};
`;

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  font-family: "Afacad", "Afacad Placeholder", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  
  h2 {
    font-weight: 500;

    margin: 0 6px 10px;
    font-size: 1.5rem;
    color: #4a4a4a;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 1em;

    &.sale {
      color: red; // <p> tagged with an additional CSS class ".SALE"
      font-size: 1.3rem;
      font-weight: 900;
    }
  }
`;

export const DirectoryItemContainer = styled(Link)`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    ${Body} {
      opacity: 0.9;
    }
  }
`;
