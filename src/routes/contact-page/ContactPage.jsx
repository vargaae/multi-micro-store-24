import { useState } from "react";

import {
  BreadcrumbNav,
  ButtonComponent,
  Contact,
  InputComponent,
} from "../../components";

import {
  ShopContainer,
  Title,
  ShopBreadcrumbNavContainer,
  ShopBreadcrumbLink,
  ContactContainer,
  ContactFormContainer,
  Message,
  FormInputLabel,
  ContactTextContainer,
  TextBox,
} from "./ContactPage.styles";

const defaultFormFields = {
  displayName: "",
  email: "",
  message: "",
};

const ContactPage = () => {
  const headerTitle = "Contact";
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, message } = formFields;

  return (
    <>
      <BreadcrumbNav headerTitle={headerTitle} />
      <ShopContainer>
        <Title>CONTACT</Title>
        <ShopBreadcrumbNavContainer>
          <ShopBreadcrumbLink to={"/"}>Home</ShopBreadcrumbLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            color="rgb(0, 0, 0)"
          >
            <path d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"></path>
          </svg>
          CONTACT
        </ShopBreadcrumbNavContainer>
        <ContactContainer>
          <ContactTextContainer>
            <TextBox>
              <h3>
                Need any help?
                <br /> we're here for you.
              </h3>
            </TextBox>
            <TextBox>
              <h5>Call Us</h5>
              <p>+96746737637</p>
              <p>+96746737637</p>
            </TextBox>
            <TextBox>
              <h5>Mail</h5>
              <p>info@mmstore-24.com</p>
            </TextBox>
          </ContactTextContainer>
          <hr />
          <ContactFormContainer>
            <form>
              <InputComponent
                className="name"
                label="Name"
                type="text"
                required
                name="displayName"
                value={displayName}
              />

              <InputComponent
                label="Email"
                type="text"
                required
                name="email"
                value={email}
              />

              <Message
                label="Message"
                type="text"
                required
                name="message"
                value={message}
                rows="10"
                cols="50"
              >
                <FormInputLabel>Message</FormInputLabel>
              </Message>

              <ButtonComponent type="submit">Send</ButtonComponent>
            </form>
          </ContactFormContainer>
        </ContactContainer>
      </ShopContainer>
      <Contact />
    </>
  );
};

export default ContactPage;
