import React from 'react';
import Logo from './res/logo.png';

import { GlobalStyle, ImgSty, StyQst, NPlay } from './Styles';



export default function App() {
  const lst = [
    {
      id: 1,
      perg: `pergunta1`,
      play: {q: 'O que é JSX?', r: 'Uma extensão de linguagem do JavaScript'}
    },
    {
      id: 2,
      perg: ``,
      play: {q: 'O que é JSX?', r: 'Uma extensão de linguagem do JavaScript'}
    }
  ];

  for (let i = 1; i < lst.length; i++) {
    lst[i].perg = `pergunta${lst[i - 1].id + 1}`;
  }


  return (
    <>
      <GlobalStyle />
      <div className='App'>
        <div className='top'>
          <ImgSty src={Logo} alt="" />
          <h1>ZapRecall</h1>
        </div>

        <div className='questions'>
          {lst.map(x => {
            return (
              <NPlay>
                <p>{x.perg}</p>
                <button>Play</button>
              </NPlay>
            )
          })}
        </div>
      </div>

    </>
  )
}




/* const StyImgLogo = styled.div`
  img {
    width: 52px;
    heigth: 60px;
    margin-right: 20px;
  }
`

const StyIndex = styled.div`



body {
  
}

.top {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}



button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
` */