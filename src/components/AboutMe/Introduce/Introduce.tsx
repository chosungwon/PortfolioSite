import React, { Fragment } from 'react';
import {
  Main,
  GlobalStyle,
  Container
} from "./styled";


function Introduce() {
    return (
      <Fragment>
        <GlobalStyle />
        <Main>
          <Container>
            나는 조성원
          </Container>
        </Main>
      </Fragment>
    );
}

export default Introduce;