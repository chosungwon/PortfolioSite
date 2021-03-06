import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	html, body{

        width: 100%;
        position: absolute;
        height: 100%;
		    padding: 0;
        margin: 0;
        background-color: white;
        font-size: 16px;
        @media (min-width: 320px) and (max-width: 480px) {
          font-size: 10px;
        }
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

export const ANav = styled.a`
  font-family: "Jua", sans-serif;

  font-size: 2.8rem;
  text-decoration: none;
  color: black;
`;

export const MANav = styled(ANav)`
  margin: 0px 40px 0px 40px;
`;

export const Footers = styled.div`
         width: 100%;
         height: 60px;
         position: absolute;
         right: 0px;
         bottom: 0px;
         border-top-left-radius: 10px;
         border-top-right-radius: 10px;
         box-shadow: 0px 5px 5px gray inset;  
         display: flex;
         align-items: center;
         justify-content: center;
         background-color: black;
       `;

