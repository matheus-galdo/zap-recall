import { useState } from "react";
import AnswerIcon from "./AnswerIcon";

function FlashCard(props) {
    const { pergunta, resposta } = props.questao;

    const { answers, callback, finishGame } = props

    const [showingQuestion, setShowingQuetion] = useState(false);
    const [showingAnswer, setShowingAnswer] = useState(false);
    const [solution, setSolution] = useState(null);

    let classe = 'pergunta';
    if (showingQuestion) classe += ' aberta';
    if (solution) classe += ` ${solution}`;

    function showQuation() {
        if (!solution) setShowingQuetion(true);
    }

    function showAnswer() {
        setShowingAnswer(true);
    }

    function finishQuestion(event, finalSolution) {
        event.stopPropagation();
        setShowingQuetion(false)
        setSolution(finalSolution)
        setShowingAnswer(false)
        callback([...answers, finalSolution])
        finishGame();
    }


    return <div onClick={showQuation} className={classe}>
        {!showingQuestion && <>
            <p>{`Pergunta ${props.index + 1}`}</p>
            <AnswerIcon type={solution} />
        </>}

        {showingQuestion && !showingAnswer && <>
            <p>{pergunta}</p>
            <button onClick={showAnswer}>virar</button>
        </>}

        {showingQuestion && showingAnswer && <>
            <p>{resposta}</p>
            <div>
                <button onClick={(event) => finishQuestion(event, 'errado')}>não lembrei</button>
                <button onClick={(event) => finishQuestion(event, 'medio')}>quase lembrei</button>
                <button onClick={(event) => finishQuestion(event, 'zap')}>zap</button>
            </div>
        </>}


    </div>
}

export default FlashCard;