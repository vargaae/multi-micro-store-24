import { useNavigate, Link, useLocation } from "react-router-dom";

import { useState } from "react";

import { navigation } from "../../constants";

import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { useDispatch, useSelector } from "react-redux";

import { setIsCartOpen } from "../../store/cart/cart.reducer";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import useComponentVisible from "../../hooks/useComponentVisible";

import {
  CartIcon,
  CartDropdown,
  AuthDropdown,
  ButtonComponent,
  BUTTON_TYPE_CLASSES,
  GradientButtonComponent,
} from "../../components";
import { HamburgerMenu } from "./NavbarDesign";
import MenuSvg from "../../assets/svg/MenuSvg";
import { logo } from "../../assets";
import { profile } from "../../assets";

import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  UserContainer,
} from "./Navbar.styles";

const Navbar = ({ navGradient }) => {
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

  const signUpIn = () => {
    if (isCartOpen) dispatch(setIsCartOpen(false));

    navigateTo("/authentication");
  };

  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (isCartOpen) dispatch(setIsCartOpen(false));
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (isCartOpen) dispatch(setIsCartOpen(false));
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <NavigationContainer
      className={`${navGradient} navbar fixed top-0 left-0 w-full z-50 border-n-6 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8 border-b-2" : "backdrop-blur-sm"
      }`}
    >
      <div className="navbar-links flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <LogoContainer onClick={goHomeCloseCart} to="/">
          <img src={logo} className="logo" alt="logo of Andras Varga" />
        </LogoContainer>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5em] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="navbar-links_container relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <p key={item.id}>
                <Link
                  to={item.url}
                  className={`block relative text-2xl text-n-2 transition-colors hover:text-n-14 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-base lg:font-semibold ${
                    item.url === pathname.pathname
                      ? "z-2 lg:text-n-2"
                      : "lg:text-n-2/50"
                  } lg:leading-5 lg:hover:text-n-2 xl:px-12`}
                  onClick={handleClick}
                >
                  {item.title}
                </Link>
              </p>
            ))}
          </div>

          <HamburgerMenu />
        </nav>
        <NavLinksContainer>
          {currentUser !== null ? (
            <UserContainer ref={ref} onClick={toggleAuthMenuOpen}>
              <ButtonComponent buttonType={BUTTON_TYPE_CLASSES.signout}>
                {currentUser?.displayName ? (
                  <img
                    src={currentUser.photoURL}
                    className="user-logo"
                    alt="User's Logo"
                    width={45}
                    height={45}
                  />
                ) : (
                  <img
                    src={profile}
                    className="user-logo"
                    alt="logo of Andras Varga"
                    width={45}
                    height={45}
                  />
                )}
              </ButtonComponent>

              {isComponentVisible && <AuthDropdown />}
            </UserContainer>
          ) : (
            <ButtonComponent
              buttonType={BUTTON_TYPE_CLASSES.navigation}
              onClick={signUpIn}
            >
              Sign In
            </ButtonComponent>
          )}
          <CartIcon id="nav-shopping-icon" />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
        <GradientButtonComponent
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </GradientButtonComponent>
      </div>
    </NavigationContainer>
  );
};

export default Navbar;
