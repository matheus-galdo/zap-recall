import { useState } from "react";
import Game from "./pages/Game";
import Home from "./pages/Home";
import './style.css';
import './reset.css';

function App() {
  const [screen, setScreen] = useState('home');

  return (
    <>
      {screen === 'home' && <Home changeScreen={setScreen}/>}
      {screen === 'game' && <Game changeScreen={setScreen}/>}
    </>
  );
}

export default App;
