import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    display: flex;
    justify-content: center;
    min-width: 320px;
    min-height: 100vh;
    background-color: #FB6B6B;
    margin-bottom: 80px;
}

.App {
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-rigth: auto;
    width: 700px;
}

.top {
    display: flex;
    width: 300px;
    justify-content: space-between; 
    align-items: center;
    margin-bottom: 40px;
}

.questions {
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.flip {
    transform: rotateY(180deg);
}

.face {
    position: absolute;
    backface-visibility: hidden;
}

.carta {
    display: flex;
    justify-content: center;
    transform-style: preserve-3d;
    transition: .5s;
    margin-bottom: 190px;
}

.front {
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    transform: rotateY(180deg);
}

.back {
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
}


h1 {
    font-size: 3.2em;
    line-height: 1.1;
    font-family: 'Righteous', sans-serif;
    font-weight: 400;
    margin-left: 15px;
    color: white;
}

.risco {
    text-decoration: line-through;
}

.vermei {
    color: rgba(255, 48, 48, 1);
}

.bcvermei {
    background-color: rgba(255, 48, 48, 1);
}

.yelou {
    color: rgba(255, 146, 46, 1);
}

.bcyelou {
    background-color: rgba(255, 146, 46, 1);
}

.grin {
    color: rgba(47, 190, 52, 1);
}

.bcgrin {
    background-color: rgba(47, 190, 52, 1);
}

.tamain {
    width: 23px;
    height: 23px;
}

.icmargin {
    margin-top: 15px;
    margin-right: 15px;
}

.botaum {
    width: 85px;
    height: 37px;

    background: #FF3030;
    border-radius: 5px;
}

.bts {
    width: 279px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.contador {
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Recursive', sans-seriff;
    font-weight: 400;
    background-color: rgba(255, 255, 255, 1);
    position: fixed;
    left: 0px;
    bottom: 0px;
}
`;

export const ImgSty = styled.img`
width: 52px;
heigth: 60px;  
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
margin-bottom: 25px;
font-family: 'Recursive', sans-serif;
font-weight: 700;
`

export const InPlay = styled.div`
margin-bottom: 150px;
padding-top: 18px;
padding-left: 15px;
width: 299px;
height: 131px;

background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
`