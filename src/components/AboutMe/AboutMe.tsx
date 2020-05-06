import React, { Fragment } from 'react';
import { Main, GlobalStyle, Container, ContainerDiv, InContainer } from './styled';


function AboutMe() {
    // function go(a: string) {
    //    window.location.href = `${a}`;
    // }
 
    return (
      <Fragment>
        <GlobalStyle />
        <Main>
          <Container>
            <InContainer>
              <ContainerDiv>
                자기 소개
              </ContainerDiv>

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