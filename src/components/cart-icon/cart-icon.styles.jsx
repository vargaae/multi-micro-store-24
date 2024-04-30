import { styled } from "styled-components";
// because of using Vite, I needed to install vite-plugin-svgr and add to vite.config.js -> then instead of:
// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
// use this import with ?react:
import ShoppingSvg from "../../assets/shopping-bag.svg?react";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
  color: #add8e6;
`;

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 24px;
  height: 24px;
  fill: #add8e6;
  // I deleted 'fill' from the shopping-bag.svg icon to be colorable
  &:hover {
    fill: #73a5c6;
  }
`;
