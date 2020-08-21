import React, { Fragment } from "react";
import {
  Main,
  GlobalStyle,
  Container,
  CL,
  CR
} from "./styled";
import toserver1 from "../../../assets/toserver1.png";
import toserver2 from "../../../assets/toserver2.png";
import toserver3 from "../../../assets/toserver3.png";


function Toserver() {
  return (
    <Fragment>
      <GlobalStyle />
      <Main>
        <Container>

          <CL>
            <h3>사용 기술</h3>
            <p>Chrom-Extension : XMLHTTPRequest</p>
            <img alt={"toserver1"} src={toserver1} />
            <br/>
            <img alt={"toserver2"} src={toserver2} />
            <img alt={"toserver3"} src={toserver3} />
          </CL> 

          <CR>
            

            <h3>설명</h3>
            <p>
              Chrome-extension을 이용하여 사용자가
              접속하는</p> <p>모든 페이지의 URL을 서버로 
              전송합니다.</p> 
              <p>그리고 서버에서 판단해
              이 사이트가 불법사이트인지, 아닌지를</p>
              <p>받아와 그 사이트를 차단하거나 보내주는
              확장 프로그램을 만들었습니다.</p>

            
       
          </CR>
        </Container>
      </Main>
    </Fragment>
  );
}

export default Toserver;
