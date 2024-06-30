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
  transition: 0.6s cubic-bezier(0.25, 0.45, 0.45, 0.95);

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const StartButton = styled(BaseButton)`
  width: auto;
  padding: 0px 60px;
  height: 2.9em;
  background-color: rgb(65, 112, 232);
  // background-color: var(--color-prime);
  color: white;
  text-transform: none;
  font-size: 20px;
  line-height: 2.9em;
  font-family: var(--font-family-numbers);
  font-weight: 500;
  place-items: center;
  place-content: center;
  text-decoration: none;
  font-style: normal;
  letter-spacing: 0em;
  color: rgb(255, 255, 255);
  border-radius: 0px;
  border: none;

  &:hover {
    color: rgb(255, 255, 255);
    background-color: #000;
    border: none;
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

export const ShopProductPageButton = styled(BaseButton)`
  max-width: 200px;
  width: auto;

  text-transform: none;
  font-size: 20px;
  line-height: 1.6em;
  //TODO: font-family
  font-family: Inter-Medium, Inter, "Inter Placeholder", sans-serif;
  font-weight: 500;
  display: flex;
  place-items: center;
  place-content: center;
  text-decoration: none;
  font-style: normal;
  letter-spacing: 0em;
  padding: 16px 60px;
  color: rgb(255, 255, 255);
  background-color: rgb(65, 112, 232);
  user-select: none;
  white-space: nowrap;
  transform: none;

  border-radius: 0px;
  border: none;

  &:hover {
    color: rgb(255, 255, 255);
    background-color: #000;
    border: none;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  min-width: 165px;
  width: auto;
  height: 50px;
  line-height: 50px;

  background-color: var(--color-prime);
  color: white;

  border: none;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const NavigationButton = styled(BaseButton)`
  background-color: transparent;
  color: lightblue;
  border-radius: 4px;
  border: none;

  &:hover {
    background-color: var(--color-prime);
    border: none;
  }
`;

export const DropDownSignOutButton = styled(BaseButton)`
  background-color: transparent;
  color: lightblue;
  border: none;

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
