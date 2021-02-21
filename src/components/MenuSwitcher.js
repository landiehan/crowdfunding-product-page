import React from 'react';
import styled from 'styled-components';

const iconHumberger = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"/></g></svg>;
const iconCloseMenu = <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15"><g fill="#FFF" fill-rule="evenodd"><path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z"/><path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z"/></g></svg>;

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

export default function MenuSwitcher({ menuExpanded, setMenuExpanded }) {
  const handleClick = () => setMenuExpanded(prev => !prev);

  return (
    <MenuButton onClick={handleClick}>
      { menuExpanded ? iconCloseMenu : iconHumberger }
    </MenuButton>
  )
}