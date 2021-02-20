import React from 'react';
import Theme from './Theme';
import Header from '../components/Header';
import styled from 'styled-components';
import heroMobile from './image-hero-mobile.jpg';
import heroDesktop from './image-hero-desktop.jpg';
import Intro from '../components/Intro';

const Container = styled.div`
  background-image: url(${heroMobile});
  background-repeat: no-repeat;
  background-size: 100%;
  @media only screen and (min-width: 576px) {
    background-image: url(${heroDesktop});
  }
  min-height: 100vh;
  background-color: #fafafa;
`;

export default function App() {
  return (
    <Theme>
      <Container>
        <Header />
        <Intro />
      </Container>
    </Theme>
  );
}