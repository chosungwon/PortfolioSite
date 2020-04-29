import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	html, body{
        width: 100%;
        height: 100%;
		padding: 0;
        margin: 0;
        background-color: white;
        font-size: 16px;
	}
`;

export const NavBar = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0px 5px 5px gray;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  /* text-align: center; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const ANav = styled.a`
  font-family: "Jua", sans-serif;

  font-size: 2.5rem;
  text-decoration: none;
  color: black;
`;

export const MANav = styled(ANav)`
  margin: 0px 40px 0px 40px;
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
         &:hover {
           border-color: #84e500;
           color: white;
         }
       `;

