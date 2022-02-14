import styled from 'styled-components';
import { mediaQueries } from '../../lib/mediaQueries';

const ContactButtonStyles = styled.a`
  position: fixed;
  right: var(--size-2);
  bottom: var(--size-2);
  background-color: var(--highlight);
  display: grid;
  place-items: center;
  padding: var(--size-2);
  border-radius: var(--border-radius);
  z-index: 99;
  border: none;
  @media (max-width: ${mediaQueries.mobile}) {
    display: none;
  }
`;

export default ContactButtonStyles;
