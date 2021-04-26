import styled from 'styled-components';
import { mediaQueries } from '../../lib/mediaQueries';

const ContactStyles = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-flow: column;
  justify-content: center;
  h2 {
    margin: 1rem 0 2rem 0;
    text-align: center;
  }

  .links {
    margin-bottom: 4rem;
    @media (max-width: ${mediaQueries.mobile}) {
      width: 100%;
    }
    a {
      @media (min-width: ${mediaQueries.mobile}) {
        margin: 0 1rem;
      }
    }
  }
`;

export default ContactStyles;
