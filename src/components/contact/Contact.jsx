import { useNavigate } from "react-router-dom";

import ButtonComponent, {
  BUTTON_TYPE_CLASSES,
} from "../button-component/ButtonComponent";

import { ContactContainer, ContactTitle } from "./Contact.styles";

const Contact = () => {
  const navigateTo = useNavigate();

  const goToContact = () => {
    navigateTo("/contact");
  };
  return (
    <ContactContainer id="contact">
      <ContactTitle>
        <span>Sign up to our newsletter & get 20% off</span>
        <ButtonComponent
          onClick={goToContact}
          buttonType={BUTTON_TYPE_CLASSES.contact}
          type="button"
        >
          SIGN UP FOR FREE
        </ButtonComponent>
      </ContactTitle>
    </ContactContainer>
  );
};

export default Contact;
