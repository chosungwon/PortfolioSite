import React, { Fragment } from "react";
import { Main, GlobalStyle, Container } from "./styled";


function TechStack() {
  return (
    <Fragment>
        <GlobalStyle />
        <Main>
          <Container>
            <span>기술 스택</span>
            <br/>
            HTML, CSS, JS, React.js, React-Natvie, Node.js
          </Container>
        </Main>
      </Fragment>
  );
}

export default TechStack;
