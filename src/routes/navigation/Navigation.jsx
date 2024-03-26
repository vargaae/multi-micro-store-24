import "./navigation.styles.scss";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { logo } from "../../assets";
// import { ReactComponent as Logo } from "../../assets/logo.svg";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
        <img src={logo} className="logo" alt="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="sign-in-link" to="/authentication">
            SIGN-IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
