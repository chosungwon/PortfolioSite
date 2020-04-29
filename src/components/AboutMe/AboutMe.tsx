import React, { Fragment } from 'react';
import { Main, GlobalStyle, NavBar, ANav, MANav, Container, ContainerDiv, InContainer } from './styled';


function AboutMe() {
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
            <InContainer>
              <ContainerDiv>자기 소개</ContainerDiv>

              <ContainerDiv>기술 스택</ContainerDiv>

              <ContainerDiv>비전</ContainerDiv>

              <ContainerDiv>Contact</ContainerDiv>
            </InContainer>
          </Container>
        </Main>
      </Fragment>
    );
}

export default AboutMe;