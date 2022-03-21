import { useState } from "react";
import Logo from "../components/Logo";
import Footer from "../Footer";
import Pergunta from "../Pergunta";
import './Game.css';


const dadosQuestoes = [
    { pergunta: 'O que é JSX?', resposta: 'Uma extensão de linguagem do JavaScript' },
    { pergunta: 'O React é __', resposta: 'uma biblioteca JavaScript para construção de interfaces' },
    { pergunta: 'Componentes devem iniciar com __', resposta: 'letra maiúscula' },
    { pergunta: 'Podemos colocar __ dentro do JSX', resposta: 'expressões' },
    { pergunta: 'O ReactDOM nos ajuda __', resposta: 'interagindo com a DOM para colocar componentes React na mesma' },
    { pergunta: 'Usamos o npm para __', resposta: 'gerenciar os pacotes necessários e suas dependências' },
    { pergunta: 'Usamos props para __', resposta: 'passar diferentes informações para componentes ' },
    { pergunta: 'Usamos estado (state) para __', resposta: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' },
];

function Game() {
    
    const [respostas, setRespostas] = useState([]);
    
    console.log(respostas);

    return <div className='game-container'>
        <Logo type={'sm'}/>

        {dadosQuestoes.sort().map((questao, index) => <Pergunta
            questao={questao}
            index={index}
            key={index}

            respostas={respostas}
            callback={setRespostas}
        />)}

        <Footer total={dadosQuestoes.length} contador={respostas.length}/>
    </div>;
}

export default Game;
