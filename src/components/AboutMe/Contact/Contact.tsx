import React, { Fragment } from "react";
import { Main, GlobalStyle, Container } from "./styled";

function Contact() {
  return (
    <Fragment>
      <GlobalStyle />
      <Main>
        <Container>
          <span>Contact</span>
          <br />
          Email : qqwow741@gmail.com
          <br />
          Phone : 010-4817-8660
        </Container>
      </Main>
    </Fragment>
  );
}

export default Contact;
