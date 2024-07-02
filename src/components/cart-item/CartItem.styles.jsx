import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
    border-radius: 0.25rem;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  span {
    font-size: 16px;
    font-weight: 600;
  }
  button {
    cursor: pointer;
  }
`;

export const ProductNameContainer = styled.div`
  // &::after {
  //   content: "..."; /* Change the content to the desired element */
  //   position: absolute;
  //   right: 0;
  //   bottom: 0;
`;

export const DotDotDot = styled.div`
  &::after {
    content: "..."; /* Change the content to the desired element */
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;
