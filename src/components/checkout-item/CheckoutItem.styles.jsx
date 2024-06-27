import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Name = styled.span`
  width: 23%;
`;

export const BaseSpan = styled.span`
  width: 23%;
  justify-content: space-around;

  &:nth-last-child(2) {
    @media screen and (max-width: 550px) {
      display: none;
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
  margin: 0 10px;
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
