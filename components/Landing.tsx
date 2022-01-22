import { useRef } from 'react';
import LandingStyles from './Styles/LandingStyles';
import ContainerStyles from './Styles/ContainerStyles';
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
            I'm a Self-taught Frontend Web-Dev based in Hamburg. I am highly
            adaptable and driven by learning. I prefer to continue challenging
            myself, keep learning, and in doing interesting things that matter.
            I also like football.
          </p>
        </div>
      </div>
      <div className="background-image" />
    </LandingStyles>
  );
}
