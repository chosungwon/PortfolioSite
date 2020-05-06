import React, { Fragment } from 'react';
import {
  Main,
  GlobalStyle,
  Container,
  ContainerTitle,
  GuContainerTitle,
} from "./styled";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Main>
    

        <Container>
          <ContainerTitle>조성원 포트폴리오 사이트</ContainerTitle>
          <br/>
          <GuContainerTitle>구경해</GuContainerTitle>
        </Container>
      </Main>
    </Fragment>
  );
}

export default App;
