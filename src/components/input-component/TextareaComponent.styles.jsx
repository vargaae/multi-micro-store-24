import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ $shrink }) => $shrink && shrinkLabelStyles}
`;

export const Input = styled.textarea`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 98%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
    background-color: #e3edfb;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
  @media screen and (min-width: 769px) {
    width: 100%;
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 45px 0;
`;
