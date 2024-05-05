import { useContext } from "react";

import { Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import { list } from "../../constants/index";

import logo from "../../assets/logo.svg";

import {
  FooterContainer,
  Heading,
  ButtonContainer,
  LinksContainer,
  LinksLogoContainer,
  LinksDivContainer,
  CopyrightContainer,
} from "./Footer.styles";

const Footer = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <FooterContainer className="gradient__bg">
      {currentUser?.email ? (
        <Heading>
          <h1>
            {"Hello "}
            {currentUser.displayName
              ? currentUser.displayName
              : currentUser.email}
            {"! What do you want to buy today?"}
          </h1>
        </Heading>
      ) : (
        <>
          <Heading>
            <h1>Do you want to shop as a Registered Customer?</h1>
          </Heading>
          <ButtonContainer>
            <Link to="/authentication">Request Access or Sign In</Link>
          </ButtonContainer>
        </>
      )}

      <LinksContainer>
        <LinksLogoContainer>
          <img src={logo} alt="ai_logo" />
          <p>
            vargaae <br /> All Rights Reserved
          </p>
        </LinksLogoContainer>
        <LinksDivContainer>
          <h4>Links</h4>
          {list.map((list) => {
            return (
              <Link key={list.id} to={list.link}>
                <p>{list.name}</p>
              </Link>
            );
          })}
        </LinksDivContainer>
        <LinksDivContainer>
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </LinksDivContainer>
        <LinksDivContainer>
          <h4>Get in touch</h4>
          <p>Budapest K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@aiforlife.net</p>
        </LinksDivContainer>
      </LinksContainer>

      <CopyrightContainer>
        <p>@2024 Andras Varga. All rights reserved.</p>
      </CopyrightContainer>
    </FooterContainer>
  );
};

export default Footer;
