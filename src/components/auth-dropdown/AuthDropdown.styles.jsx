import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  DropDownSignOutButton,
  InvertedButton,
} from "../button-component/ButtonComponent.styles";

export const AuthDropdownContainer = styled.div`
  position: absolute;
  width: 270px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 10px solid rgba(4, 12, 24, 1);
  background-color: rgba(4, 12, 24, 1);
  top: 5em;
  right: 40px;
  z-index: 6;

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

export const AuthDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DisplayNameContainer = styled.div`
  margin-bottom: 0.5rem;

  font-size: 1em;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  margin: 0 auto;

  img {
    object-position: center top;
    object-fit: cover;
    image-rendering: auto;
  }
`;
