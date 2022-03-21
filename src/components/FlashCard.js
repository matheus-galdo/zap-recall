import { useState } from "react";
import {BiRightArrow} from 'react-icons/bi';
import {BsArrowClockwise} from 'react-icons/bs';
import AnswerIcon from "./AnswerIcon";
import './FlashCard.css';

function FlashCard(props) {
    const { pergunta, resposta } = props.questao;
    const { answers, callback, finishGame } = props;

    const [showingQuestion, setShowingQuetion] = useState(false);
    const [showingAnswer, setShowingAnswer] = useState(false);
    const [solution, setSolution] = useState(null);

    let classe = 'flashcard';
    if (showingQuestion) classe += ' open';
    if (solution) classe += ` ${solution}`;

    function showQuation() {
        if (!solution) setShowingQuetion(true);
    }

    function showAnswer() {
        setShowingAnswer(true);
    }

    function finishQuestion(event, finalSolution) {
        event.stopPropagation();
        setShowingQuetion(false);
        setSolution(finalSolution);
        setShowingAnswer(false);
        callback([...answers, finalSolution]);
        finishGame();
    }

    console.log(props.index + 1, solution, !!solution);

    return <div onClick={showQuation} className={classe}>
        {!showingQuestion && <>
            <p>{`Pergunta ${props.index + 1}`}</p>
            {solution ? <AnswerIcon type={solution}/> : <BiRightArrow/>}
        </>}

        {showingQuestion && !showingAnswer && <>
            <p>{pergunta}</p>
            <button onClick={showAnswer}>
                <BsArrowClockwise/>
            </button>
        </>}

        {showingQuestion && showingAnswer && <>
            <p>{resposta}</p>
            <div>
                <button onClick={(event) => finishQuestion(event, 'forgot')}>não lembrei</button>
                <button onClick={(event) => finishQuestion(event, 'remember')}>quase lembrei</button>
                <button onClick={(event) => finishQuestion(event, 'zap')}>zap</button>
            </div>
        </>}
    </div>
}

export default FlashCard;