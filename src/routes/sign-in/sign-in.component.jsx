import "./sign-in.styles.scss";

import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
// import { Outlet, Link } from "react-router-dom";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SingIn = () => {
  const logGoogleRedirectUser = async () => {
    const response = await getRedirectResult(auth);
    if(response) {
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
  };

  useEffect(() => {
    logGoogleRedirectUser();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign">
      <h1>- Sign In Page -</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
    </div>
  );
};

export default SingIn;
