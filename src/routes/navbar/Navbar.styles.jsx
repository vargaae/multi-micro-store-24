import { styled, keyframes } from "styled-components";

import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 5em;

  font-family: var(
    --font-family-shopinfo,
    var(--font-family, Inter, Inter Placeholder, sans-serif)
  );
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
`;

// Logo-float keyframes
const float = keyframes`
   0% {
     transform: translateY(0);
   }
   50% {
     transform: translateY(10px);
   }
   100% {
     transform: translateY(0px);
   }
`;

export const LogoContainer = styled(Link)`
  width: 50px;
  padding: 0.5rem 0.5rem 0.5rem 1rem;

  .logo {
    height: 40%;
    pointer-events: none;
    /* animation: ${float} infinite 3s ease-in-out; */
    @media (prefers-reduced-motion: no-preference) {
      animation: ${float} infinite 3s ease-in-out;
    }
    @media screen and (min-width: 550px) {
      height: 80%;
    }
  }
  @media screen and (min-width: 550px) {
    padding: 0.5rem 0.5rem 0.5rem 2rem;
    width: 70px;
  }
`;

export const NavLinksContainer = styled.div`
  height: 100%;
  width: 100%;
  padding-right: 20px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (min-width: 1020px) {
    width: 50%;
    padding-right: 40px;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  line-height: 20px;
  cursor: pointer;
`;

export const UserContainer = styled.div`
  color: lightblue;
  cursor: pointer;

  .user-logo {
    fill: white;
    padding: 0px 10px;

    pointer-events: none;
    // height: 45px;
    // width: 45px;
    border-radius: 50%;
  }
`;

export const DisplayNameContainer = styled.div`
  padding: 0 15px;
  &:hover {
    color: #73a5c6;
  }
`;
