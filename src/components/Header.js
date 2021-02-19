import React, { useState } from 'react';
import styled from 'styled-components';
const LogoSvg = <svg xmlns="http://www.w3.org/2000/svg" width="128" height="20"><path d="M7.272 20c2.69 0 5.022-1.4 6.202-3.54L9.88 14.402c-.439.96-1.454 1.537-2.662 1.537-1.783 0-3.1-1.29-3.1-3.184 0-1.893 1.317-3.183 3.1-3.183 1.208 0 2.196.576 2.662 1.537l3.595-2.086c-1.18-2.113-3.54-3.512-6.202-3.512C3.101 5.51 0 8.666 0 12.755 0 16.845 3.101 20 7.272 20zm11.367-.384v-6.202c0-2.717 2.415-3.403 4.116-3.129V5.62c-1.728 0-3.567.878-4.116 2.717V5.895h-4.116v13.72h4.116zM30.116 20c4.034 0 7.272-3.156 7.272-7.245s-3.238-7.244-7.272-7.244c-4.034 0-7.272 3.155-7.272 7.244 0 4.09 3.238 7.245 7.272 7.245zm0-4.007c-1.784 0-3.156-1.29-3.156-3.238s1.372-3.238 3.156-3.238 3.156 1.29 3.156 3.238c0 1.949-1.372 3.238-3.156 3.238zm15.181 3.623l2.196-7.327 2.195 7.327h3.842l4.39-13.721h-4.39l-1.976 7.354-2.14-7.354h-3.842l-2.14 7.354-1.977-7.354h-4.39l4.39 13.72h3.842zM64.156 20c1.839 0 3.183-.631 4.089-1.674v1.29h4.116V.406h-4.116v6.778c-.906-1.042-2.25-1.673-4.089-1.673-3.595 0-6.559 3.155-6.559 7.244 0 4.09 2.964 7.245 6.559 7.245zm.823-3.897c-1.893 0-3.265-1.29-3.265-3.348s1.372-3.348 3.265-3.348c1.894 0 3.266 1.29 3.266 3.348s-1.372 3.348-3.266 3.348zm14.66 3.513v-9.77h2.552V5.895H79.64c0-1.592 1.016-2.058 2.552-1.921V.022c-4.555-.274-6.668 2.03-6.668 5.873h-1.839v3.951h1.839v9.77h4.116zm8.266.384c1.811 0 3.184-.659 3.925-1.674v1.29h4.116V5.895H91.83v7.491c0 1.949-1.043 2.827-2.553 2.827-1.317 0-2.387-.796-2.387-2.497V5.895h-4.116v8.424c0 3.705 2.36 5.681 5.131 5.681zm14.44-.384v-7.492c0-1.948 1.044-2.826 2.553-2.826 1.317 0 2.387.795 2.387 2.497v7.82h4.117v-8.424c0-3.705-2.36-5.68-5.132-5.68-1.811 0-3.183.658-3.924 1.673v-1.29h-4.117v13.722h4.117zm17.02.384c1.84 0 3.184-.631 4.09-1.674v1.29h4.116V.406h-4.116v6.778c-.906-1.042-2.25-1.673-4.09-1.673-3.594 0-6.558 3.155-6.558 7.244 0 4.09 2.964 7.245 6.559 7.245zm.824-3.897c-1.893 0-3.265-1.29-3.265-3.348s1.372-3.348 3.265-3.348c1.894 0 3.266 1.29 3.266 3.348s-1.372 3.348-3.266 3.348z" fill="#FFF" fill-rule="nonzero"/></svg>;
const iconHumberger = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"/></g></svg>;
const iconCloseMenu = <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15"><g fill="#FFF" fill-rule="evenodd"><path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z"/><path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z"/></g></svg>;

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
`;

const Logo = styled.a`
  display: inline-block;
  svg {
    display: block;
  }
`;

const MenuButton = styled.button`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media only screen and (min-width: 576px) {
    display: none;
  }
`;

const MenuContainer = styled.nav`
  display: ${props => props.display ? 'block' : 'none'};
  position: absolute;
  top: 8rem;
  bottom: 0;
  width: 98%;
  background-color: rgba(0, 0, 0, .2);
  @media only screen and (min-width: 576px) {
    display: block;
    position: static;
    width: unset;
    background-color: initial;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: white;
  @media only screen and (min-width: 576px) {
    flex-direction: row;
    border-radius: unset;
    background-color: transparent;
  }
`;

const MenuItem = styled.li`
  color: black;
  padding: 2.2rem 2.2rem 2.4rem;
  font-size: 2rem;
  font-weight: 500;
  & + & {
    border-top: 1px solid rgba(0, 0, 0, .1);
  }
  @media only screen and (min-width: 576px) {
    color: white;
    & + & {
      border-top: unset;
    }
    font-size: 1.5rem;
    opacity: .95;
  }
`;

export default function Header() {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const handleClick = () => setMenuExpanded(prev => !prev);

  const menuItems = ['About', 'Discover', 'Get Started'];

  return (
    <Container>
      <Logo>{ LogoSvg }</Logo>

      <MenuButton onClick={handleClick}>
        { menuExpanded ? iconCloseMenu : iconHumberger }
      </MenuButton>
      <MenuContainer display={menuExpanded} >
        <MenuList>
          { menuItems.map((item, index) => (
              <MenuItem key={'item_' + index}>
                {item}  
              </MenuItem> 
          ))}
        </MenuList>
      </MenuContainer>
    </Container>
  );
}