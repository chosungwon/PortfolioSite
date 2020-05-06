import React, { Fragment } from 'react';
import { Main, GlobalStyle, Container, ContainerDiv, InContainer } from './styled';


function AboutMe() {
    function go(a: string) {
       window.location.href = `${a}`;
    }
 
    return (
      <Fragment>
        <GlobalStyle />
        <Main>
          <Container>
            <InContainer>
              <ContainerDiv onClick = {() => {go("/PortfolioSite/AboutMe/Introduce")}}>
                자기 소개
              </ContainerDiv>

              <ContainerDiv onClick = {() => {go("/PortfolioSite/AboutMe/TechStack")}}>
                기술 스택
              </ContainerDiv>

              <ContainerDiv onClick = {() => {go("/PortfolioSite/AboutMe/Vision")}}>
                  비전
              </ContainerDiv>

              <ContainerDiv onClick = {() => {go("/PortfolioSite/AboutMe/Contact")}}>
                  Contact
            </ContainerDiv>
            </InContainer>
          </Container>
        </Main>
      </Fragment>
    );
}

export default AboutMe;