import AnswerIcon from "./AnswerIcon"
import party from '../imgs/party.png'
import sad from '../imgs/sad.png'
import './Footer.css';

const endMessages = [
    { icon: party, title: 'Parabéns!', text: 'Você não esqueceu de nenhum flashcard!' },
    { icon: sad, title: 'Putz...!', text: <>Ainda faltam alguns... <br /> Mas não desanime!</> }
];

function getEndMessage(answers, goal) {
    if (goal !== '') {
        const goalIsAchieved = answers.filter(answer => answer === 'zap').length === Number(goal);
        return goalIsAchieved ? endMessages[0] : endMessages[1];
    }

    return answers.includes('forgot') ? endMessages[1] : endMessages[0];
}

export default function Footer({ answers, total, changeScreen, goal, setGoal }) {
    const gameIsFinished = answers.length === total;
    const result = getEndMessage(answers, goal);
    
    let footerClass = 'footer';
    if (gameIsFinished) footerClass += ' finished';

    function restartGame() {
        changeScreen('home');
        setGoal('');
    }

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
            <button onClick={restartGame}>REINICIAR RECALL</button>
        </div>}
    </footer>
}