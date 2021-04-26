import React from 'react';
import ContactStyles from './Styles/ContactStyles';
import ContainerStyles from './Styles/ContainerStyles';

export default function Contact() {
  return (
    <ContainerStyles>
      <ContactStyles>
        <h2>
          Let's <span>Talk</span>{' '}
        </h2>
        <div className="links">
          <a href="mailto:sarmun.b@gmail.com" className="button">
            Get in Touch
          </a>
          <a
            href="https://www.linkedin.com/in/sarmun-bustillo-947111199"
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://www.google.com"
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </ContactStyles>
    </ContainerStyles>
  );
}
