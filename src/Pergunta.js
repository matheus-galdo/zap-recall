import { useState } from "react";

export default function Pergunta(props) {
    const { pergunta, resposta } = props.questao;

    const {respostas, callback} = props

    const [aberto, setAberto] = useState(false);
    const [mostrandoResposta, setMostrandoResposta] = useState(false);
    const [solucao, setSolucao] = useState(null);

    let classe = 'pergunta';
    if (aberto) {
        classe += ' aberta';
    }

    if (solucao) {
        classe += ` ${solucao}`;
    }

    function toggleCard(event) {
        event.stopPropagation();
        setAberto(true);
    }


    function mostrarResposta() {
        setMostrandoResposta(true);
    }

    function finalizarQuestao(event, solucaoFinal) {
        event.stopPropagation();
        setAberto(false)
        setSolucao(solucaoFinal)
        setMostrandoResposta(false)

        
        callback([...respostas, solucaoFinal])
        // atualizar o footer
    }
    

    return <div onClick={toggleCard} className={classe}>
        {aberto && !mostrandoResposta && <>
            {pergunta}
            <button onClick={mostrarResposta}>virar</button>
        </>}

        {aberto && mostrandoResposta && <>
            {resposta}
            <button onClick={(event) => finalizarQuestao(event, 'errado')}>não lembrei</button>
            <button onClick={(event) => finalizarQuestao(event, 'medio')}>quase lembrei</button>
            <button onClick={(event) => finalizarQuestao(event, 'zap')}>zap</button>
        </>}

        {!aberto && <>
            {`Pergunta ${props.index + 1}`}
        </>}
    </div>
}