import styled from "styled-components";

import { Link } from "react-router-dom";

import { ButtonComponent } from "../../components";

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

export const PaymentFormContainer = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
`;

export const FormContainer = styled.form`
  // height: 100px;
  // min-width: 500px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2.5em auto;
  @media screen and (min-width: 550px) {
    flex-direction: row;
  }
`;

export const PaymentButton = styled(ButtonComponent)`
  width: 260px;
`;

export const EmptyMessage = styled.div`
  color: #ff776f;
  font-weight: 600;
  margin: auto;
  padding: 1em;
`;

export const ShopLink = styled(Link)`
  font-size: 2rem;

  &:hover {
    color: darkblue;
    text-decoration: underline;
  }
`;

export const ImageContainer = styled.div`
  height: 300px;
  inset: 0px;
  margin: auto;
  padding: 1em;

  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-position: center top;
    object-fit: cover;
    image-rendering: auto;

    // height: max(min(max(100vw, 0px), 1600px), 0px);
    // width: max(min(max(100vw, 0px), 1600px), 0px);
  }

  @media screen and (min-width: 550px) {
    height: 400px;
  }
  @media screen and (min-width: 810px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1600px) {
    width: 98%;
  }
`;
