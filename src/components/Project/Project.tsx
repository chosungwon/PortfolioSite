import React, { Fragment } from "react";
import { Main, GlobalStyle, Container, InContainer, ContainerDiv } from "./styled";

function Project() {
  function go(a: string) {
    window.location.href = `${a}`;
  }
  return (
    <Fragment>
      <GlobalStyle />
      <Main>
        <Container>
          <InContainer>
            <ContainerDiv onClick = {() => {go("/PortfolioSite/Project/Weather")}}>RN 날씨앱</ContainerDiv>

            <ContainerDiv onClick={() => { go("/PortfolioSite/Project/Drink") }}>Drink Well</ContainerDiv>

            <ContainerDiv onClick={() => { go("/PortfolioSite/Project/Toserver") }}>Toserver</ContainerDiv>

            <ContainerDiv>우강푸</ContainerDiv>
          </InContainer>
        </Container>
      </Main>
    </Fragment>
  );
}

export default Project;

