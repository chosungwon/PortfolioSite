import React, { Fragment } from "react";
import { Main, GlobalStyle, Container } from "./styled";

function Vision() {
  return (
    <Fragment>
      <GlobalStyle />
      <Main>
        <Container>
          <span>비전</span>
          <br />
          내 비전은 부자다.
        </Container>
      </Main>
    </Fragment>
  );
}


export default Vision;

