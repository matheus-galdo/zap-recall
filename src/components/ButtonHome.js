import './ButtonHome.css';

function ButtonHome({onClick, children, selectedDeck}) {
    const classButton = selectedDeck !== 'escolha'? 'button-home' : 'button-home disabled'
    return <button className={classButton} onClick={onClick} disabled={selectedDeck === 'escolha'}>
        {children}
    </button>;
}

export default ButtonHome;