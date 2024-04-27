import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  DropDownSignOutButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ß{DropDownSignOutButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const CartItemsContainer = styled.div`
  height: 290px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const EmptyMessage = styled.span`
  font-size: 1.5rem;
  margin: 50px auto;
`;

export const Total = styled.span`
  font-size: 1.5rem;
`;
