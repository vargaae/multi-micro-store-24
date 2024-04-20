import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { logo } from "../../assets";

import { UserContext } from "../../contexts/user.context";
import { UserMenuContext } from "../../contexts/user-menu.context";
import { CartContext } from "../../contexts/cart.context";

import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import AuthDropdown from "../../components/auth-dropdown/AuthDropdown";

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
  UserContainer,
  DisplayNameContainer,
} from "./navigation.styles.jsx";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { userMenuOpen, setUserMenuOpen } = useContext(UserMenuContext);
  const { cartOpen } = useContext(CartContext);

  const toggleAuthMenuOpen = () => setUserMenuOpen(!userMenuOpen);

  return (
    <>
      <NavigationContainer className="gradient__bg">
        <LogoContainer to="/">
          <img src={logo} className="logo" alt="logo of Andras Varga" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser !== null ? (
            <UserContainer onClick={toggleAuthMenuOpen}>
              <DisplayNameContainer>
                {currentUser.displayName
                  ? currentUser.displayName
                  : currentUser.email}
              </DisplayNameContainer>
              {currentUser.photoURL ? (
                <>
                  <img
                    src={currentUser.photoURL}
                    className="user-logo"
                    alt="User's Logo"
                  />
                </>
              ) : null}
              {userMenuOpen && <AuthDropdown />}
            </UserContainer>
          ) : (
            <NavLink to="/authentication">SIGN-IN</NavLink>
          )}
          <CartIcon id="nav-shopping-icon" />
        </NavLinksContainer>
        {cartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
