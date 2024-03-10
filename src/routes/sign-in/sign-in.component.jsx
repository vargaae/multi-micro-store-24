import "./sign-in.styles.scss";
// import { Outlet, Link } from "react-router-dom";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SingIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign">
      <h1>- SIGN IN PAGE -</h1>
      <button onClick={logGoogleUser}>
      Sign in with Google Popup
      </button>
    </div>
  );
};

export default SingIn;
