import styled from "styled-components";

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0 0 10px;

  @media screen and (max-width: 550px) {
    height: 350px;
  }

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
    border-radius: 0.25rem;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
      z-index: 2;
    }
    .productpagelink {
      width: 100%;
      height: 100%;

      position: absolute;
      z-index: 1;
      color: transparent;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;

  font-size: 14px;
  @media screen and (min-width: 550px) {
    font-size: 18px;
    justify-content: space-between;
  }
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;
