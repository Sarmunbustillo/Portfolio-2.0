import { useRef } from 'react';
import LandingStyles from './Styles/LandingStyles';
import { useParallax } from '../lib/useParallax';

export default function Landing() {
  const sarRef = useRef(null);
  useParallax(sarRef);
  return (
    <LandingStyles>
      <div>
        <div ref={sarRef} className="descripton">
          <h1>Sarmun Bustillo</h1>
          <h1>Frontend Developer</h1>
          <p>
            I'm a Self-taught Frontend Web-Dev based in Hamburg devoted to
            crafting exceptional web experiences. Currently, I'm focused on
            building accessible, stylish and meaningful products at{' '}
            <a href="https://www.f7.de/" target="_blank" rel="noreferrer">
              F7 Media GmbH
            </a>
          </p>
        </div>
      </div>
      <div className="background-image" />
    </LandingStyles>
  );
}
