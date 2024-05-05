import { useContext } from "react";
import { Outlet } from "react-router-dom";

import { logo } from "../../assets";

import { UserContext } from "../../contexts/user.context";
// import { UserMenuContext } from "../../contexts/user-menu.context";
import { CartContext } from "../../contexts/cart.context";

import { CartIcon, CartDropdown, AuthDropdown } from "../../components";

import useComponentVisible from "../../hooks/useComponentVisible";

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
  UserContainer,
  DisplayNameContainer,
} from "./Navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  // TODO: Clean unnecessary parts, if customHook works properly
  // const { userMenuOpen, setUserMenuOpen } = useContext(UserMenuContext);
  const { cartOpen, setCartOpen } = useContext(CartContext);

  const toggleAuthMenuOpen = () => {
    setIsComponentVisible(!isComponentVisible);
    if (cartOpen) setCartOpen(!cartOpen);
  };

  // const navigate = useNavigate()

  const goToShopCloseDropdowns = () => {
    if (cartOpen) setCartOpen(!cartOpen);
    // if (userMenuOpen) setUserMenuOpen(!userMenuOpen);
    // navigate("/")
  };

  return (
    <>
      <NavigationContainer className="gradient__bg">
        <LogoContainer onClick={goToShopCloseDropdowns} to="/">
          <img src={logo} className="logo" alt="logo of Andras Varga" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink onClick={goToShopCloseDropdowns} to="/shop">
            SHOP
          </NavLink>
          {currentUser !== null ? (
            <UserContainer ref={ref} onClick={toggleAuthMenuOpen}>
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
              {isComponentVisible && <AuthDropdown ref={ref} />}
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
