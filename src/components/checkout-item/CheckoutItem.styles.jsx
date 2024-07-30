import styled from "styled-components";

import { Link } from "react-router-dom";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 550px) {
    font-size: 14px;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Name = styled(Link)`
  width: 23%;
`;

export const BaseSpan = styled.span`
  width: 23%;
  justify-content: space-around;

  font-family: var(--font-family-numbers);
  font-style: normal;
  letter-spacing: 0em;

  &:nth-last-child(2) {
    @media screen and (max-width: 550px) {
      display: none;
    }
  }
  &:last-child {
    @media screen and (min-width: 550px) {
      width: 13%;
    }
  }
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
  font-weight: 600;
`;

export const IncreaseDecrease = styled.div`
  cursor: pointer;
  width: 3px;

  &:hover {
    color: lightblue;
  }
`;

export const Value = styled.span`
  font-family: var(--font-family-numbers);
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0em;
  line-height: 1.6em;
  text-align: start;
  text-decoration: none;

  @media screen and (min-width: 550px) {
    margin: 0 10px;
  }
`;

export const RemoveButton = styled.div`
  justify-content: space-around;
  padding-left: 12px;
  cursor: pointer;

  &:hover {
    color: red;
    font-weight: 600;
  }
`;
