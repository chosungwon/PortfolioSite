import React, { Fragment } from "react";
import {
  Main,
  GlobalStyle,
  Container,
  CL,
  CR
} from "./styled";
import drink1 from "../../../assets/drink1.png";
import drink2 from "../../../assets/drink2.png";
import drink3 from "../../../assets/drink3.png";


function Drink() {
  return (
    <Fragment>
      <GlobalStyle />
      <Main>
        <Container>

          <CL>
            <h3>사용 기술</h3>
            <p>React-Native : Splash Activity, WebView</p>
            <p>React : Web</p>
            <img alt={"drink1"} src={drink1} />
            <img alt={"drink2"} src={drink2} />
            <img alt={"drink3"} src={drink3} />
          </CL> 

          <CR>
            

            <h3>설명</h3>
            <p>React-Native와 React로 만든 웹앱입니다.</p>
            <p>React-Native로는 스플래시 액티비티와 웹뷰를 구현했고,</p>
            <p> React로는 웹앱을 
            제작하였습니다.</p>
            <p>공공데이터포털에 있는
            약수터의 데이터를 파싱해 
            제작하였고,</p>
            <p>다음 지도의 api를 사용해 위치를 보여주었습니다.</p>
          </CR>
        </Container>
      </Main>
    </Fragment>
  );
}

export default Drink;
