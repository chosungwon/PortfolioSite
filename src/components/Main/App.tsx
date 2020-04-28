import React, { Fragment } from 'react';
import { Main, GlobalStyle, NavBar, ANav, MANav, Container, ContainerTitle } from './styled';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Main>
        <NavBar>
          <ANav href="/">Home</ANav>
          <MANav href="/AboutMe">AboutMe</MANav>
          <ANav href="/Project">Project</ANav>
        </NavBar>

        <Container>
          <ContainerTitle>조성원 포트폴리오 사이트</ContainerTitle>
          <br/>
          <ContainerTitle>구경ㄱ</ContainerTitle>
        </Container>
      </Main>
    </Fragment>
  );
}

export default App;
