import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    margin: 0;
    display: flex;
    justify-content: center;
    min-width: 320px;
    min-height: 100vh;
    background-color: #FB6B6B;
  }

  .top {
    display: flex;
    justify-content: space-between; 
    align-items: center;
    margin-bottom: 40px;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
    font-family: 'Righteous', sans-serif;
    font-weight: 400;
    margin-left: 15px;
    color: white;
  }
`;

export const ImgSty = styled.img`
  width: 52px;
  heigth: 60px;  
`;

export const StyQst = styled.div`
    
`;

export const NPlay = styled.div`
    width: 300px;
    heigth: 65px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-item: center;
    justify-content: space-between;
    padding-left: 15px;
    padding-rigth: 15px;
`