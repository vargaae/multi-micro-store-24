import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  DropDownSignOutButton,
  InvertedButton,
} from "../button-component/ButtonComponent.styles";

export const AuthDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid rgba(4, 12, 24, 1);
  background-color: rgba(4, 12, 24, 1);
  top: 5em;
  right: 40px;
  z-index: 6;

  font-family: var(--font-family-shopinfo);
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.02em;

  img {
    margin-top: 0.7rem;
  }

  ${BaseButton},
  ${GoogleSignInButton},
  ${DropDownSignOutButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const AuthDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DisplayNameContainer = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1em;
`;
