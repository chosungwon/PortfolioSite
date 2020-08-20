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
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;

export const InContainer = styled.div`
         width: 50%;
         height: calc(100vh - 80px);
         flex-wrap: wrap;
         display: flex;
         align-items: center;
         justify-content: center;
       `;

export const ContainerDiv = styled.div`
         cursor: pointer;
         width: 47.6%;
         height: 44%;
         display: flex;
         align-items: center;
         justify-content: center;
         margin: 0.3%;
         font-size: 4rem;
         font-family: "Jua", sans-serif;
         border-style: solid;
         border-radius: 20px;
         border-color: #f20059;
         border-width: 7px;
         color: #e2d84f;
         background-color: #353337;
         &:hover {
           border-color: #84e500;
           color: white;
         }
         @media (min-width: 320px) and (max-width: 480px) {
           flex-direction: column;
           width: 120%;
           height: 15%;
          
         }
       `;

