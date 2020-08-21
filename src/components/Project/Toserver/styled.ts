import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	html, body{
        width: 100%;
        height: 100%;
        position: absolute;
		padding: 0;
        margin: 0;
        background-color: white;
        font-size: 10px;
	}
`;



export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
         width: 100%;
         height: calc(100vh - 60px);
         background-color: #353337;
         display: flex;
         flex-direction: row;
         
         font-size: 3rem;
         font-family: "Jua", sans-serif;
         /* color: #84e500; */
         overflow: hidden;
       `;

export const CL = styled.div`
    text-align: center;
     width: 50%;
    float: left;
`;

export const CR = styled.div`
text-align: center;
    width: 50%;
    float: right;
`;



