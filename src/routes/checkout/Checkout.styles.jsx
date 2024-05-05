import styled from "styled-components";

export const CheckoutContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to top, #accbee 0%, #fff1eb 100%);
  border-radius: 0.25rem;

  @media screen and (min-width: 550px) {
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
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.span`
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  margin-left: auto;
  font-size: 2.3rem;
`;

export const PayContainer = styled.div`
  width: 65%;
  // display: flex;
`;

export const EmptyMessage = styled.div`
  color: red;
  font-weight: 900;
  margin: auto;
`;
