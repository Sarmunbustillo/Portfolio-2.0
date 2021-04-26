import { useRef } from 'react';
import LandingStyles from './Styles/LandingStyles';
import ContainerStyles from './Styles/ContainerStyles';
import { useParallax } from '../lib/useParallax';

export default function Landing() {
  const sarRef = useRef(null);
  useParallax(sarRef);
  return (
    <LandingStyles>
      <ContainerStyles>
        <div ref={sarRef} className="descripton">
          <h1>
            <span className="highlight">Sarmun</span> Bustillo
          </h1>
          <h2>
            Frontend <span className="highlight"> Developer</span>
          </h2>
          <p>
            I'm a Self-taught Frontend Web-Dev based in Hamburg. I am highly
            adaptable and driven by learning. I prefer to continue challenging
            myself, keep learning, and in doing interesting things that matter.
            I also like football.
          </p>
        </div>
      </ContainerStyles>
      <div className="background-image" />
    </LandingStyles>
  );
}
