import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.nav`
  display: ${props => props.display ? 'block' : 'none'};
  position: absolute;
  top: 8rem;
  bottom: 0;
  width: 100%;
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

const Overlay = styled.div`
  display: ${props => props.display ? 'block' : 'none'};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.1);
`;

export default function Menu({ menuExpanded }) {
  const menuItems = ['About', 'Discover', 'Get Started'];

  return (
    <MenuContainer display={menuExpanded} >
      <MenuList>
        { menuItems.map((item, index) => (
            <MenuItem key={'item_' + index}>
              {item}  
            </MenuItem> 
        ))}
      </MenuList>
      <Overlay display={menuExpanded} />
    </MenuContainer>
  )
}