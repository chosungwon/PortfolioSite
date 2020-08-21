import React, { Fragment } from "react";
import {
  Main,
  GlobalStyle,
  Container,
  CL,
  CR
} from "./styled";
import weather1 from "../../../assets/weather1.png";
import weather2 from "../../../assets/weather2.png";


function Weather() {
  return (
    <Fragment>
      <GlobalStyle />
      <Main>
        <Container>

          <CL>
            <h3>사용 기술</h3>
            <p>React-Native</p>
            <img alt={"weather1"} src={weather1} />
            <img alt={"weather2"} src={weather2} />
          </CL> 

          <CR>
            <h3>설명</h3>
            <p>React-Native를 이용하여 앱을 제작하였고,</p>
            <p>디자인은 flex-box, fetchAPI를 이용한 통신을 하였습니다.</p>
            <p>큰 프로젝트보다 RN을 시작한것에 의의를 두었습니다.</p>
          </CR>
        </Container>
      </Main>
    </Fragment>
  );
}

export default Weather;
