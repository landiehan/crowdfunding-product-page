import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Menu from './Menu';
import MenuSwitcher from './MenuSwitcher';

const Container = styled.header`
  width: 90%;
  padding: 2rem 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (min-width: 576px) {
    width: 80%;
    max-width: 1200px; 
    padding: 4rem 0;
  }
  position: relative;
  z-index: 2;
`;

export default function Header() {
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <Container>
      <Logo />
      <MenuSwitcher menuExpanded={menuExpanded} setMenuExpanded={setMenuExpanded} />
      <Menu menuExpanded={menuExpanded} />
    </Container>
  );
}