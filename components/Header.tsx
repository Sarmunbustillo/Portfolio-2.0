import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  background-color: var(--primary-bg);
  color: var(--primary-color-text);
`;
function Header() {
  return <HeaderStyles>Logo</HeaderStyles>;
}
export default Header;
