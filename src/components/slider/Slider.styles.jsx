import styled from "styled-components";

import { Link } from "react-router-dom";

export const SliderComponent = styled.div`
  height: calc(100vh - 110px);
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

export const SliderContainer = styled.div`
  width: 300vw;
  height: 100%;
  display: flex;
  transition: all 1s ease;

  img {
    width: 100vw;
    height: 100%;
    object-fit: cover;
  }
`;

export const IconsContainer = styled.div`
  width: fit-content;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 100px;
  gap: 10px;
  margin: auto;
`;

export const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #999;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
