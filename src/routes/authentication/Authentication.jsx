import {
  BreadcrumbNav,
  SignInForm,
  SignUpForm,
  Contact,
} from "../../components";

import { AuthenticationContainer } from "./Authentication.styles";

const Authentication = () => {
  const headerTitle = "Sign In / Sign Up";
  return (
    <>
      <BreadcrumbNav headerTitle={headerTitle} />
      <AuthenticationContainer>
        <SignInForm />
        <hr />
        <SignUpForm />
      </AuthenticationContainer>
      <Contact />
    </>
  );
};

export default Authentication;
