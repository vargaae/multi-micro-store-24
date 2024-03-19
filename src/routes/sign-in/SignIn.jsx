import "./sign-in.styles.scss";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/SignUpForm";
import { Button } from "../../components/button/Button";

const SingIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // eslint-disable-next-line no-unused-vars
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign">
      <h1>- Sign In Page -</h1>
      <Button
        buttonType="google"
        label="Sign in with Google Popup"
        onClick={logGoogleUser}
      />
      <SignUpForm />
    </div>
  );
};

export default SingIn;
