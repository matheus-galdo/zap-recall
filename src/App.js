import { useState } from "react";
import Game from "./pages/Game";
import Home from "./pages/Home";
import './style.css';
import './reset.css';

function App() {
  const [screen, setScreen] = useState('home');
  const [selectedDeck, setSelectedDeck] = useState('escolha');

  return (
    <>
      {screen === 'home' && <Home
        changeScreen={setScreen}
        selectDeck={setSelectedDeck}
        selectedDeck={selectedDeck}
      />}
      
      {screen === 'game' && <Game changeScreen={setScreen} deckName={selectedDeck}/>}
    </>
  );
}

export default App;
