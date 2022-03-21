import { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import FlashCard from "../components/FlashCard";
import './Game.css';
import decks from "../Decks";

function random() {
    return Math.random() - 0.5;
}

function Game({changeScreen, deckName}) {
    const [answers, setAnswers] = useState([]);
    const [finished, setFinished] = useState(false);
    const [deck, setDeck] = useState([]);

    useEffect(() => {
        const deck = decks.filter(deck => deck.name === deckName)[0].questions;
        setDeck(deck.sort(random))
    }, [])

    function finishGame() {
        if (answers.length === deck.length) {
            setFinished(true);
        }   
    }

    return <div className='game-container'>
        <Logo type={'sm'} changeScreen={changeScreen}/>

        <div className="questions-container">
            {deck.map((question, index) => <FlashCard
                question={question}
                index={index}
                key={index}

                answers={answers}
                callback={setAnswers}
                finishGame={finishGame}
            />)}
        </div>

        <Footer total={deck.length} answers={answers} changeScreen={changeScreen}/>
    </div>;
}

export default Game;
