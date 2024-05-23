import { useDispatch, useSelector } from "react-redux";

import { setIsCartOpen } from "../../store/cart/cart.reducer";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import useComponentVisible from "../../hooks/useComponentVisible";

import { Outlet, useNavigate } from "react-router-dom";

import { selectCurrentUser } from "../../store/user/user.selector";

import { logo } from "../../assets";

import {
  CartIcon,
  CartDropdown,
  AuthDropdown,
  ButtonComponent,
  BUTTON_TYPE_CLASSES,
} from "../../components";

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  UserContainer,
} from "./Navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const toggleAuthMenuOpen = () => {
    setIsComponentVisible(!isComponentVisible);
    if (isCartOpen) dispatch(setIsCartOpen(!isCartOpen));
  };

  const navigateTo = useNavigate();

  const goHomeCloseCart = () => {
    if (isCartOpen) dispatch(setIsCartOpen(!isCartOpen));

    navigateTo("/");
  };

  const goToShopCloseCart = () => {
    if (isCartOpen) dispatch(setIsCartOpen(false));

    navigateTo("/shop");
  };

  const signUpIn = () => {
    if (isCartOpen) dispatch(setIsCartOpen(false));

    navigateTo("/authentication");
  };

  return (
    <NavigationContainer className="gradient__bg">
      <LogoContainer onClick={goHomeCloseCart} to="/">
        <img src={logo} className="logo" alt="logo of Andras Varga" />
      </LogoContainer>
      <NavLinksContainer>
        <ButtonComponent
          buttonType={BUTTON_TYPE_CLASSES.navigation}
          onClick={goToShopCloseCart}
        >
          SHOP
        </ButtonComponent>
        {currentUser !== null ? (
          <UserContainer ref={ref} onClick={toggleAuthMenuOpen}>
            <ButtonComponent buttonType={BUTTON_TYPE_CLASSES.signout}>
              {currentUser?.displayName
                ? currentUser?.displayName
                : currentUser?.email}
            </ButtonComponent>
            {currentUser?.photoURL ? (
              <>
                <img
                  src={currentUser.photoURL}
                  className="user-logo"
                  alt="User's Logo"
                />
              </>
            ) : null}
            {isComponentVisible && <AuthDropdown />}
          </UserContainer>
        ) : (
          <ButtonComponent
            buttonType={BUTTON_TYPE_CLASSES.navigation}
            onClick={signUpIn}
          >
            SIGN{"/"}UP{"/"}IN
          </ButtonComponent>
        )}
        <CartIcon id="nav-shopping-icon" />
      </NavLinksContainer>
      {isCartOpen && <CartDropdown />}
    </NavigationContainer>
  );
};

export default Navigation;
