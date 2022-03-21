import ButtonHome from "../components/ButtonHome";
import Logo from "../components/Logo";
import decks from "../Decks";

function Home({ changeScreen, selectDeck, selectedDeck }) {
    return <div className="home-container">
        <Logo type={'big'} />
        <select defaultValue={'escolha'} onChange={(event) => selectDeck(event.target.value)}>
            <option>Escolha seu deck</option>
            {decks.map((deck, index) => {
                return <option value={deck.name} key={index}>
                    {deck.name}
                </option>
            })}
        </select>
        <ButtonHome selectedDeck={selectedDeck} onClick={() => changeScreen('game')}>Iniciar Recall!</ButtonHome>
    </div>
}

export default Home;