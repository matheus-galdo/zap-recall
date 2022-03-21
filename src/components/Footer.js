import AnswerIcon from "./AnswerIcon"
import './Footer.css';

import party from '../imgs/party.png'
import sad from '../imgs/sad.png'

const endMessages = [
    { icon: party, title: 'Parabéns!', text: 'Você não esqueceu de nenhum flashcard!' },
    { icon: sad, title: 'Putz...!', text: <>Ainda faltam alguns... <br /> Mas não desanime!</> }
];

export default function Footer({ answers, total, changeScreen }) {
    console.log('aaa', answers);
    const gameIsFinished = answers.length === total;
    const result = answers.includes('forgot') ? endMessages[1] : endMessages[0];

    let footerClass = 'footer';
    if (gameIsFinished) footerClass += ' finished';

    return <footer className={footerClass}>
        {gameIsFinished && <div className="game-finished-message">
            <h1><img src={result.icon} alt="" /> {result.title}</h1>
            <p>{result.text}</p>
        </div>}
        <p>{answers.length}/{total} CONCLUÍDOS</p>


        <div className="answers-icons">
            {answers.map((answer, index) => <AnswerIcon key={index} type={answer} />)}
        </div>

        {gameIsFinished && <div className="game-finished-message">
            <button onClick={() => changeScreen('home')}>REINICIAR RECALL</button>
        </div>}
    </footer>
}