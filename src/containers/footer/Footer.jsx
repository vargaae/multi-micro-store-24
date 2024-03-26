import logo from "../../assets/logo.svg";
import "./footer.scss";
import { Link } from "react-router-dom";
import { list } from "../../constants/index";

const Footer = () => (
  <div className="ecommerce__footer section__padding" id="openai">
    <div className="ecommerce__footer-heading">
      <h1 className="gradient__text">
        Do you want to shop as a Registered Customer?
      </h1>
    </div>

    <div className="ecommerce__footer-btn">
      <Link to="/authentication">Request Access</Link>
    </div>

    <div className="ecommerce__footer-links">
      <div className="ecommerce__footer-links_logo">
        <img src={logo} alt="ai_logo" />
        <p>
          vargaae <br /> All Rights Reserved
        </p>
      </div>
      <div className="ecommerce__footer-links_div">
        <h4>Links</h4>
        {list.map((list) => {
          return (
            <Link key={list.id} className="nav-link" to={list.link}>
              <p>{list.name}</p>
            </Link>
          );
        })}
      </div>
      <div className="ecommerce__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="ecommerce__footer-links_div">
        <h4>Get in touch</h4>
        <p>Budapest K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@aiforlife.net</p>
      </div>
    </div>

    <div className="ecommerce__footer-copyright">
      <p>@2024 Andras Varga. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
