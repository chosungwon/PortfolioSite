import styled, { createGlobalStyle } from 'styled-components';
import img from '../../assets/background.jpg'


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
`

export const Container = styled.div`
         width: 100%;
         height: calc(100vh - 60px);
         background-image: url(${img});
         background-size: cover;
         display: flex;
         align-items: center;
         justify-content: center;
         flex-direction: column;
         opacity: 0.78;
       `;

export const ContainerTitle = styled.span`
         font-family: "Jua", sans-serif;
         font-size: 5rem;
         color: #84e500;
       `;

export const GuContainerTitle = styled(ContainerTitle)`
         color: #f20059;
       `;