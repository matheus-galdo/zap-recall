import ButtonHome from "../components/ButtonHome";
import Logo from "../components/Logo";

function Home({changeScreen}) {
    return <div className="home">
        <Logo type={'big'}/>
        <ButtonHome onClick={() => changeScreen('game')}>Iniciar Recall!</ButtonHome>
    </div>
}

export default Home;