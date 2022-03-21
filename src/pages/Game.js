import { useState } from "react";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import FlashCard from "../components/FlashCard";
import './Game.css';
import { DeckReact, DeckTeste } from "../Decks";


function Game() {

    const [answers, setAnswers] = useState([]);
    const [finished, setFinished] = useState(false);
    const [deck, setDeck] = useState(DeckReact)

    console.log(answers);

    function finishGame() {
        if (answers.length === deck.length) {
            setFinished(true);
        }
    }

    return <div className='game-container'>
        <Logo type={'sm'} />

        <div className="questions-container">
            {deck.sort().map((questao, index) => <FlashCard
                questao={questao}
                index={index}
                key={index}

                answers={answers}
                callback={setAnswers}
                finishGame={finishGame}
            />)}
        </div>

        <Footer total={deck.length} answers={answers} />
    </div>;
}

export default Game;
