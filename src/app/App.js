import React from 'react';
import Theme from './Theme';
import Header from '../components/Header';
import styled from 'styled-components';
import heroMobile from './image-hero-mobile.jpg';
import heroDesktop from './image-hero-desktop.jpg';

const Container = styled.div`
  background-image: url(${heroMobile});
  background-repeat: no-repeat;
  background-size: 100%;
  @media only screen and (min-width: 576px) {
    background-image: url(${heroDesktop});
  }
  min-height: 100vh;
`;

export default function App() {
  return (
    <Theme>
      <Container>
        <Header />
      </Container>
    </Theme>
  );
}