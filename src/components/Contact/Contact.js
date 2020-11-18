import React from "react";
import "./contact.scss";
import Logo from "../../assets/logo.jpg";
import india from "../../assets/indian.jpg";
import canada from "../../assets/canada.jpg";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__wrapper">
        <div className="contact__items-wrapper">
          <div className="contact__items">
            <h4 className="contact__items-title">Our Offices</h4>
            <p>
              <img src={india} alt="indian-flag" className="contact__flag" />
            </p>
            <p>
              3, NNH, Sofiya Zuber Road,
              <br />
              Nagpada, Mumbai-400008.
            </p>
            <p>
              <strong>Email:</strong> sales@minutri.in
            </p>
            <p>
              <img className="contact__flag" src={canada} alt="canadian-flag" />
            </p>
            <p>
              Unit 814, 666 Ontario Street,
              <br />
              Toronto, ON, Canada
            </p>
            <p>
              <strong>Email:</strong> info@minutri.in
            </p>
          </div>
          <div className="contact__details">
            <h4 className="contact__items-title">Contact</h4>
            <p className="contact__text">
              <a
                href="mailto:manoj@minutri.in"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__text"
              >
                <strong>Email:</strong> manoj@minutri.in
              </a>
            </p>
            <p>
              <strong>Phone :</strong> 022-60601116/+91 - 09702948289
            </p>
          </div>
        </div>
        <div className="contact__image">
          <span>MiNutri Care ™ 2018 - All Rights Reserved</span>

          <img src={Logo} alt="Minutri Care" className="contact__image-logo" />
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
