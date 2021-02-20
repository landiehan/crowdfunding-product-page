import React from 'react';
import styled, { css } from 'styled-components';

const logoSvg = <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56"><g fill="none" fill-rule="evenodd"><circle fill="#000" cx="28" cy="28" r="28"/><g fill-rule="nonzero"><path d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z" fill="#444"/><path d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z" fill="#FFF"/></g></g></svg>;
const iconBookmark = <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56"><g fill="none" fill-rule="evenodd"><circle fill="#2F2F2F" cx="28" cy="28" r="28"/><path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z"/></g></svg>;

const Container = styled.section`
  width: 90%;
  margin: 17rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 1rem;
  padding-bottom: 4rem;
  border: 1px solid #e7e7e7;
  @media only screen and (min-width: 576px) {
    max-width: 800px;
    margin-top: calc(100vw / 1440 * 400 * 0.7 - 144px);
  }
`;

const LogoLink = styled.a`
  display: inline-block;
  > * {
    display: block;
  }
  transform: translateY(-50%);
`;

const Logo = ({ children }) => (
  <LogoLink href='#' aria-label='Mastercraft'>
    {children}
  </LogoLink>
);

const Heading = styled.h1`
  width: 23rem;
  text-align: center;
  @media only screen and (min-width: 576px) {
    width: initial;
  }
`;

const Tagline = styled.p`
  color: ${props => props.theme.darkGray};
  margin: 2rem 0 3rem;
  width: 90%;
  text-align: center;
`;

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  @media only screen and (min-width: 576px) {
    max-width: 650px;
  }
`;

const BackTrigger = styled.button`
  border: none;
  color: white;
  background-color: ${props => props.theme.moderateCyan};
  border-radius: 9999px;
  height: 56px;
  width: 200px;
  font-weight: 700;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
`;

const BookmarkLabel = styled.label`
  display: flex;
  svg {
    display: block;
  };
  @media only screen and (min-width: 576px) {
    & {
      background-color: #f4f4f4;
      border-radius: 9999px;
    }
    &::after {
      content: 'Bookmark';
      line-height: 56px;
      margin-left: 1rem;
      margin-right: 3rem;
      font-weight: 700;
      color: #777777;
    }
    cursor: pointer;
  }
`;

const VisuallyHidden = css`
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
`

const BookmarkInput = styled.input.attrs({
  type: 'checkbox'
})`
  ${VisuallyHidden}
`;

const BookmarkSwitcher = () => (
  <BookmarkLabel>
    {iconBookmark}
    <BookmarkInput />
  </BookmarkLabel>
)

export default function Intro() {
  return (
    <Container>
      <Logo>{logoSvg}</Logo>
      <Heading>Mastercraft Bamboo Monitor Riser</Heading>
      <Tagline>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </Tagline>
      <FooterWrapper>
        <BackTrigger>Back this project</BackTrigger>
        <BookmarkSwitcher />        
      </FooterWrapper>
    </Container>
  )
}