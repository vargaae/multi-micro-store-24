//TODO: font-family
import styled from "styled-components";

export const BaseButton = styled.button`
  line-height: 50px;
  letter-spacing: 0.5px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  /* font-family: "Open Sans Condensed"; */
  font-weight: bolder;
  border: 1px solid transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const ShopButton = styled(BaseButton)`
  /* line-height: 20px; */
  line-height: 23px;
  /* @media screen and (min-width: 550px) {
    min-width: 165px;
    width: auto;
    height: 50px;
    line-height: 50px;
  } */
  @media screen and (min-width: 769px) {
    min-width: 165px;
    width: auto;
    height: 50px;
    line-height: 50px;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  min-width: 165px;
  width: auto;
  height: 50px;
  line-height: 50px;

  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const NavigationButton = styled(BaseButton)`
  background-color: transparent;
  color: lightblue;
  border-radius: 5px;

  &:hover {
    background-color: #4170e8;
    border: none;
  }
`;

export const DropDownSignOutButton = styled(BaseButton)`
  background-color: transparent;
  color: lightblue;

  &:hover {
    background-color: transparent;
    color: white;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  max-width: 165px;
  width: auto;
  height: 50px;
  line-height: 50px;
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;