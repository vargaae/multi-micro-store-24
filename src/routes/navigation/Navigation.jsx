import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { logo } from "../../assets";

import { UserContext } from "../../contexts/user.context";
import { UserMenuContext } from "../../contexts/user-menu.context";
import { CartContext } from "../../contexts/cart.context";

import "./navigation.styles.scss";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import AuthDropdown from "../../components/auth-dropdown/AuthDropdown";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { userMenuOpen, setUserMenuOpen } = useContext(UserMenuContext);
  const { cartOpen } = useContext(CartContext);

  const toggleAuthMenuOpen = () => setUserMenuOpen(!userMenuOpen);

  return (
    <Fragment>
      <div className="navigation gradient__bg">
        <Link className="logo-container" to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser !== null ? (
            <div className="user-container" onClick={toggleAuthMenuOpen}>
              <div className="displayname">
                {currentUser.displayName
                  ? currentUser.displayName
                  : currentUser.email}
              </div>
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
            </div>
          ) : (
            <Link className="sign-in-link" to="/authentication">
              SIGN-IN
            </Link>
          )}
          <CartIcon id="nav-shopping-icon" />
        </div>
        {cartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
