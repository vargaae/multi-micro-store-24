import { Link } from "react-router-dom";
import styled from "styled-components";

export const CheckoutContainer = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to top, #accbee 0%, #fff1eb 100%);
  border-radius: 0.25rem;

  font-family: var(--font-family-shopinfo);
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.02em;

  width: 100%;
  margin: 10px auto 10px;

  @media screen and (max-width: 550px) {
    font-size: 12px;
  }

  @media screen and (min-width: 810px) {
    width: 85%;
    margin: 10px auto 10px;
  }
  @media screen and (min-width: 1000px) {
    width: 75%;
    margin: 50px auto 20px;
  }
  @media screen and (min-width: 1200px) {
    width: 55%;
    margin: 50px auto 20px;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  @media screen and (min-width: 810px) {
    padding: 10px 15px 10px 0;
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:nth-last-child(4) {
    @media screen and (min-width: 550px) {
      padding-left: 2.5em;
    }
  }

  &:nth-last-child(3) {
    @media screen and (max-width: 550px) {
      display: none;
    }
    @media screen and (min-width: 550px) {
      padding-left: 2em;
    }
  }

  &:last-child {
    width: 10%;
    @media screen and (min-width: 550px) {
      width: 6%;
    }
  }
`;

export const Total = styled.span`
  margin-top: auto;
  margin-bottom: 2rem;
  margin-left: auto;
  font-size: 2.3em;
  border-radius: 0.25em;
`;

export const PayContainer = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
`;

export const EmptyMessage = styled.div`
  color: red;
  font-weight: 900;
  margin: auto;
`;

export const ShopLink = styled(Link)`
  font-size: 2rem;
  &:hover {
    color: darkblue;
    text-decoration: underline;
  }
`;
