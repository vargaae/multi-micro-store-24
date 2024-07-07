import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  DropDownSignOutButton,
  InvertedButton,
} from "../button-component/ButtonComponent.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 270px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid black;
  background-color: white;
  top: 5em;
  right: 40px;
  z-index: 5;

  font-family: var(--font-family-shopinfo);
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.02em;

  ${BaseButton},
  ${GoogleSignInButton},
  ${DropDownSignOutButton},
  ${InvertedButton} {
    margin-top: auto;
  }

  @media screen and (max-width: 550px) {
    top: 77px;
  }
`;

export const CartItemsContainer = styled.div`
  height: 290px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative; /* Add this to make sure the ::after element is positioned relative to the parent */

  .child-box::after {
    content: "..."; /* Change the content to the desired element */
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .no-max-width {
    max-width: none;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 1em;
  margin: 50px auto;
`;

export const Total = styled.span`
  font-size: 1.5rem;
`;
