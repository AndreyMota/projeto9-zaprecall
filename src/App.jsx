import React, { useState } from 'react';
import Logo from './res/logo.png';
import { GlobalStyle, ImgSty, NPlay, InPlay } from './Styles';
import { RxCrossCircled } from 'react-icons/rx';
import { AiFillQuestionCircle, AiFillCheckCircle } from 'react-icons/ai';
import { HiOutlinePlay } from 'react-icons/hi2';

function App() {
  const [flip, setFlip] = useState("carta");
  const [dsb, setDsb] = useState(false);
  const [rsp, setRsp] = useState(0);
  const lst = [
    {
      id: 1,
      apertou: false,
      perg: `pergunta1`,
      play: {q: 'O que é JSX?', r: 'Uma extensão de linguagem do JavaScript'},
      situ: 0
    },
    {
      id: 2,
      apertou: false,
      perg: ``,
      play: { q: "O React é __", r: "Uma biblioteca JavaScript para construção de interfaces" },
      situ: 0
    },
    {
      id: 3,
      apertou: false,
      perg: ``,
      play: { q: "Componentes devem iniciar com __", r: "Letra maiúscula" },
      situ: 0
    },
    {
      id: 4,
      apertou: false,
      perg: ``,
      play: { q: "Podemos colocar __ dentro do JSX", r: "expressões" },
      situ: 0
    },
    {
      id: 5,
      apertou: false,
      perg: ``,
      play: { q: "O ReactDOM nos ajuda __", r: "Interagindo com a DOM para colocar componentes React na mesma" },
      situ: 0
    }
    ,
    {
      id: 6,
      apertou: false,
      perg: ``,
      play: { q: "Usamos props para __", r: "Passar diferentes informações para componentes" },
      situ: 0
    },
    {
      id: 7,
      apertou: false,
      perg: ``,
      play: { q: "Usamos o npm para __", r: "Gerenciar os pacotes necessários e suas dependências" },
      situ: 0
    },
    {
      id: 8,
      apertou: false,
      perg: ``,
      play:  {q: "Usamos estado (state) para __", r: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" },
      situ: 0
    }
  ];

  for (let i = 1; i < lst.length; i++) {
    lst[i].perg = `pergunta${lst[i - 1].id + 1}`;
  }
  const [Lsd, setLsd] = useState([...lst]);

  
  function card(aid) {
    setDsb(true);
    console.log(typeof(aid));
    let novo = [...Lsd];
    novo.forEach(x => {
      console.log(x.id);
      if (x.id === aid) {
        console.log('Entrou');
        x.apertou = true;
      }
    })
    setLsd([...novo]);
    console.log(novo);
  }
  
  function virar() {
    if (flip === "carta") {
      setFlip("carta flip");
    }
    
    if (flip === "carta flip") {
      setFlip("carta");
    }
  }

  function handleClick(event, aid) {
    let bt = event.target.textContent;
    let novo = [...Lsd];
    novo.forEach(x => {
      console.log(x.id);
      if (x.id === aid) {
        console.log('Entrou');
        if (bt === "Não lembrei") {
          x.situ = 1;
        }
        if (bt === "Quase não lembrei") {
          x.situ = 2;
        }
        if (bt === "Zap!") {
          x.situ = 3;
        }
        x.apertou = false;
      }
    })
    setDsb(false);
    setRsp(rsp + 1);
    setLsd([...novo]);
    console.log(novo);
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
          {Lsd.map(x => {
            let aid = x.id;
            if (x.apertou === true) {
              const p = x.play;
              return (
                <div data-test="turn-btn" className={flip} onClick={() => virar()}>
                  <InPlay className='face front'>
                    <p data-test="flashcard-text">{p.r}</p>
                    <div className="bts">
                      <button data-test="no-btn" className='botaum bcvermei' onClick={(event) => handleClick(event, x.id)}>Não lembrei</button>
                      <button data-test="partial-btn" className='botaum bcyelou' onClick={(event) => handleClick(event, x.id)}>Quase não lembrei</button>
                      <button data-test="zap-btn" className='botaum bcgrin' onClick={(event) => handleClick(event, x.id)}>Zap!</button>
                    </div>
                  </InPlay>
                  <InPlay className='face back'>
                    <p data-test="flashcard-text">{p.q}</p>
                  </InPlay>
                </div>
              )
            }
            if (x.situ === 0) {
              return (
                <NPlay data-test="flashcard">
                  <p data-test="flashcard-text">{x.perg}</p>
                  <button data-test="play-btn" disabled={dsb} onClick={() => card(aid)}><HiOutlinePlay className='tamain'></HiOutlinePlay></button>
                </NPlay>
              )
            }
            if (x.situ === 1) {
              return (
                <NPlay data-test="flashcard">
                  <p data-test="flashcard-text" className='risco vermei' >{x.perg}</p>
                  <RxCrossCircled data-test="no-icon" className='tamain vermei icmargin'></RxCrossCircled>
                </NPlay>
              )
            }
            if (x.situ === 2) {
              return (
                <NPlay data-test="flashcard">
                  <p data-test="flashcard-text" className='risco yelou' >{x.perg}</p>
                  <AiFillQuestionCircle data-test="partial-icon" className='tamain yelou icmargin'></AiFillQuestionCircle>
                </NPlay>
              )
            }
            if (x.situ === 3) {
              return (
                <NPlay data-test="flashcard">
                  <p data-test="flashcard-text" className='risco grin' >{x.perg}</p>
                  <AiFillCheckCircle data-test="zap-icon" className='tamain grin icmargin'></AiFillCheckCircle>
                </NPlay>
              )
            }
            
          })}
        </div>

        <div data-test="footer" className="contador">
          <p>{rsp}/{lst.length}</p>
        </div>
      </div>

    </>
  )
}

export default App;