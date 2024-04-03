import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { logo } from "../../assets";
// import { ReactComponent as Logo } from "../../assets/logo.svg";
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
            <div className="sign-out-displayname-container">
              <Link className="nav-link" onClick={signOutUser}>
                SIGN-OUT -{">"}
              </Link>
              <div className="displayname">
                {currentUser.displayName
                  ? currentUser.displayName
                  : currentUser.email}
              </div>
              {currentUser.photoURL ? (
                <img
                  src={currentUser.photoURL}
                  className="user-logo"
                  alt="User's Logo"
                />
              ) : null}
            </div>
          ) : (
            <Link className="sign-in-link" to="/authentication">
              SIGN-IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
