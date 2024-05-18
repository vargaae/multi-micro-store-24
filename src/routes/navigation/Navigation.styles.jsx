import { styled, keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
  a {
    color: lightblue;
    &:hover {
      color: #73a5c6;
    }
  }
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
  width: 30px;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;

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
  width: 50%;
  height: 100%;
  padding-right: 40px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
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
    padding: 0px 10px;

    pointer-events: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
  }
`;

export const DisplayNameContainer = styled.div`
  padding: 0 15px;
  &:hover {
    color: #73a5c6;
  }
`;
