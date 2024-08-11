import { useDispatch, useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";
import { setIsComponentVisible } from "../../store/user/user.reducer";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { ButtonComponent, BUTTON_TYPE_CLASSES } from "../";

import {
  AuthDropdownContainer,
  AuthDetailsContainer,
  DisplayNameContainer,
  ImageContainer,
} from "./AuthDropdown.styles";

const AuthDropdown = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const closeAuthMenuOpen = () => {
    dispatch(setIsComponentVisible(false));
  };

  return (
    <AuthDropdownContainer onMouseLeave={closeAuthMenuOpen}>
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
                <ImageContainer>
                <img src={currentUser.photoURL} alt="User's Logo" />
                </ImageContainer>
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
