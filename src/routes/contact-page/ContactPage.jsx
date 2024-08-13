import { useRef, useState } from "react";

import emailjs from "emailjs-com";

import {
  BreadcrumbNav,
  ButtonComponent,
  Contact,
  InputComponent,
  TextareaComponent,
} from "../../components";

import {
  ShopContainer,
  Title,
  ShopBreadcrumbNavContainer,
  ShopBreadcrumbLink,
  ContactContainer,
  ContactFormContainer,
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

  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_oz92q8v",
        "template_khzskgm",
        formRef.current,
        "user_83iut0ltHexzhXQ2piWeI"
      )
      .then(
        (result) => {
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

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
            <form ref={formRef} onSubmit={handleSubmit}>
              <InputComponent
                className="name"
                label="Name"
                id="Name"
                type="text"
                required
                autoComplete="true"
                onChange={handleChange}
                name="displayName"
                value={displayName}
              />

              <InputComponent
                label="Email"
                id="Email"
                type="text"
                required
                autoComplete="true"
                onChange={handleChange}
                name="email"
                value={email}
              />

              <TextareaComponent
                label="Message"
                id="Message"
                type="text"
                required
                autoComplete="true"
                onChange={handleChange}
                name="message"
                value={message}
                rows="10"
              />

              <ButtonComponent>Send an email to us</ButtonComponent>
              <ContactTextContainer>
                {done && (
                  <h5>
                    Thank you! We have got your email.
                    <p>We will reply as soon as possible.</p>
                    <p>
                      <strong>Andras</strong> from <strong>MMSTORE-24</strong>
                    </p>
                  </h5>
                )}
              </ContactTextContainer>
            </form>
          </ContactFormContainer>
        </ContactContainer>
      </ShopContainer>
      <Contact />
    </>
  );
};

export default ContactPage;
