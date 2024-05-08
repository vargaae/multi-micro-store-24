import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { ButtonComponent, BUTTON_TYPE_CLASSES } from "../";

import {
  AuthDropdownContainer,
  AuthDetailsContainer,
  DisplayNameContainer,
} from "./AuthDropdown.styles";

const AuthDropdown = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <AuthDropdownContainer>
      <AuthDetailsContainer>
        {currentUser !== null ? (
          <div>
            <DisplayNameContainer>
              {currentUser.displayName
                ? currentUser.displayName
                : currentUser.email}
            </DisplayNameContainer>
            {currentUser.photoURL ? (
              <>
                {currentUser.email}
                <img src={currentUser.photoURL} alt="User's Logo" />
              </>
            ) : null}
          </div>
        ) : null}
      </AuthDetailsContainer>
      <ButtonComponent
        buttonType={BUTTON_TYPE_CLASSES.signout}
        onClick={signOutUser}
      >
        SIGN OUT
      </ButtonComponent>
    </AuthDropdownContainer>
  );
};

export default AuthDropdown;
