import React from 'react';
import ContactStyles from './Styles/ContactStyles';
import ContainerStyles from './Styles/ContainerStyles';

export default function Contact() {
  return (
    <ContainerStyles>
      <ContactStyles id="contact">
        <h2>Let's Talk</h2>
        <div className="links">
          <span className="button-wrapper-border">
            <a href="mailto:sarmun.b@gmail.com" className="button ">
              Get in Touch
            </a>
          </span>
          <span className="button-wrapper-border">
            <a
              href="https://www.linkedin.com/in/sarmun-bustillo-947111199"
              className="button "
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </span>
          <span className="button-wrapper-border">
            <a
              href="https://www.google.com"
              className="button "
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </span>
        </div>
      </ContactStyles>
    </ContainerStyles>
  );
}
