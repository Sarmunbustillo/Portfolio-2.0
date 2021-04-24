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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            consequuntur rem distinctio beatae quod tempora sequi ad debitis
            repudiandae odio sit quisquam numquam officia quidem dolor,
            voluptatum libero. Natus, neque!
          </p>
        </div>
      </ContainerStyles>
      <div className="background-image" />
    </LandingStyles>
  );
}
