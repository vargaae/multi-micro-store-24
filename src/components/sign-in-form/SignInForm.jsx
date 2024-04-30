import { useState } from "react";

import { useNavigate } from "react-router";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import { InputComponent } from "../";
import { Button, BUTTON_TYPE_CLASSES } from "../button/Button";

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

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      await signInWithGooglePopup();

      navigate(`/`);
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
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      navigate(`/`);
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
    <div className="sign-in-container column">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <InputComponent
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <InputComponent
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
            type="button"
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
