import { useState } from "react";
import { BiRightArrow } from 'react-icons/bi';
import { BsArrowClockwise } from 'react-icons/bs';
import AnswerIcon from "./AnswerIcon";
import './FlashCard.css';
import iconArrow from '../imgs/setinha.png';


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
            {solution ? <AnswerIcon type={solution} /> : <BiRightArrow />}
        </>}

        {showingQuestion && !showingAnswer && <>
            <p>{pergunta}</p>
            <div className="turn-button-container">
                <button className='turn-button' onClick={showAnswer}>
                    <img src={iconArrow} alt="" />
                </button>
            </div>
        </>}

        {showingQuestion && showingAnswer && <>
            <p>{resposta}</p>
            <div className="finish-game-buttons-container">
                <button className='forgot-button finish-button' onClick={(event) => finishQuestion(event, 'forgot')}>não lembrei</button>
                <button className='remember-button finish-button' onClick={(event) => finishQuestion(event, 'remember')}>quase lembrei</button>
                <button className='zap-button finish-button' onClick={(event) => finishQuestion(event, 'zap')}>zap</button>
            </div>
        </>}
    </div>
}

export default FlashCard;