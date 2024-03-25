import { useState } from "react";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import { FormInput } from "../form-input/FormInput";
import { Button } from "../button/Button";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      // eslint-disable-next-line no-unused-vars
      const userDocRef = await createUserDocumentFromAuth(user);
    } catch (error) {
      console.error(
        "Caught error Popup closed. Error signing in with Google: ",
        error
      );
      alert(
        "Google Popup closed. Click again to Sign In or Sign In with Google PopUp for Signingin"
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response); // TODO: use response for Authentication
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert(
            "No user associated with this email or Incorrect password for this email! Try it again"
          );
          break;
        case "auth/wrong-password": // Previous error code: ACTUALLY USED: auth/invalid-credential
          alert("Incorrect password for this email! Try it again");
          break;
        case "auth/user-not-found": // Previous error code: ACTUALLY USED: auth/invalid-credential
          alert("No user associated with this email");
          break;
        default:
          console.log("User signing in encountered an error", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button label="Sign In" type="submit" />
          <Button
            buttonType="google"
            label="Google Sign In"
            onClick={signInWithGoogle}
            type="button"
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
