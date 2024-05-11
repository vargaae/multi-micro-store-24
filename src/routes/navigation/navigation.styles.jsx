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
  height: 100%;
  width: 70px;
  padding: 8px;
  padding-left: 32px;

  .logo {
    pointer-events: none;
    /* animation: ${float} infinite 3s ease-in-out; */
  }
  @media (prefers-reduced-motion: no-preference) {
    .logo {
      animation: ${float} infinite 3s ease-in-out;
    }
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
    width: 1.3rem;
    pointer-events: none;
    border-radius: 50%;
  }
`;

export const DisplayNameContainer = styled.div`
  padding: 0 15px;
  &:hover {
    color: #73a5c6;
  }
`;
