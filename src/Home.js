import { useState } from "react";
import Footer from "./Footer";
import Pergunta from "./Pergunta";

const dadosQuestoes = [
    { pergunta: 'sadasd', resposta: 'sim!' },
    { pergunta: 'ota pergunta', resposta: '42!' },
    { pergunta: 'mais uma', resposta: 'talvez!' },
];

function Home() {
    
    const [respostas, setRespostas] = useState([]);
    
    console.log(respostas);

    return <>
        <h1>Listar perguntas</h1>

        {dadosQuestoes.sort().map((questao, index) => <Pergunta
            questao={questao}
            index={index}
            key={index}

            respostas={respostas}
            callback={setRespostas}
        />)}

        <Footer total={dadosQuestoes.length} contador={respostas.length}/>
    </>;
}


function Contador() {
    const [contador, setContador] = useState(0);
    const [teste, setTeste] = useState(0);

    console.log('Renderizei!')

    function mudarValor(operacao) {
        if (operacao === '+') {
            setContador(contador + 1)
        } else {
            setContador(contador - 1)
        }
    }

    return <div>
        <button onClick={() => mudarValor('-')}>-</button>
        <p>{contador}</p>
        <button onClick={() => mudarValor('+')}>+</button>
    </div>
}



export default Home;