import { useContext } from "react";

import { Button } from "../button/Button";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";

import "./auth-dropdown.styles.scss";

const AuthDropdown = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="auth-dropdown-container">
      <div className="auth-items">
        {currentUser !== null ? (
          <div className="sign-out-displayname-container">
            <div className="displayname">
              {currentUser.displayName
                ? currentUser.displayName
                : currentUser.email}
            </div>
            {currentUser.photoURL ? (
              <>
                <img
                  src={currentUser.photoURL}
                  className="menu-user-logo"
                  alt="User's Logo"
                />
              </>
            ) : null}
          </div>
        ) : null}
      </div>
      <Button buttonType="inverted" onClick={signOutUser}>SIGN OUT</Button>
    </div>
  );
};

export default AuthDropdown;
