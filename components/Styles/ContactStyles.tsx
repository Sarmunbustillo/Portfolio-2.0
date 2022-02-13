import styled from 'styled-components';
import { mediaQueries } from '../../lib/mediaQueries';

const ContactStyles = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-flow: column;
  justify-content: center;
  padding-block: var(--size-11);
  @media (max-width: ${mediaQueries.mobile}) {
    padding-block: var(--size-8);
  }
  h2 {
    margin-bottom: var(--size-8);
    text-align: center;
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    gap: var(--size-6);
    > * {
      @media (max-width: ${mediaQueries.mobile}) {
        width: 100%;
      }
    }
  }
`;

export default ContactStyles;
