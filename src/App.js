import { useState } from "react";
import Game from "./pages/Game";
import Home from "./pages/Home";
import './style.css';
import './reset.css';

function App() {
  const [screen, setScreen] = useState('home');
  const [selectedDeck, setSelectedDeck] = useState('escolha');
  const [goal, setGoal] = useState('');

  return (
    <>
      {screen === 'home' && <Home
        changeScreen={setScreen}
        selectDeck={setSelectedDeck}
        selectedDeck={selectedDeck}
        setGoal={setGoal}
      />}

      {screen === 'game' && <Game
        changeScreen={setScreen}
        setGoal={setGoal}
        goal={goal}
        deckName={selectedDeck}
      />}
    </>
  );
}

export default App;
