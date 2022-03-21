import { useState } from "react";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import FlashCard from "../components/FlashCard";
import './Game.css';
import { DeckReact, DeckTeste } from "../Decks";


function Game() {
    
    const [answers, setAnswers] = useState([]);
    const [finished, setFinished] = useState(false);
    
    console.log(answers);

    function finishGame(){
        if (answers.length === DeckTeste.length) {
            setFinished(true);
        }
    }

    return <div className='game-container'>
        <Logo type={'sm'}/>

        {DeckTeste.sort().map((questao, index) => <FlashCard
            questao={questao}
            index={index}
            key={index}

            answers={answers}
            callback={setAnswers}
            finishGame={finishGame}
        />)}

        <Footer total={DeckTeste.length} answers={answers}/>
    </div>;
}

export default Game;
