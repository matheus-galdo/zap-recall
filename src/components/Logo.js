import logo from '../imgs/logo-big.png';
import logoSmall from '../imgs/logo.png';
import './logo.css';

function Logo({type, changeScreen}) {
    const logoClass = type === 'big' ? 'logo-home big' : 'logo-home small';
    const image = type === 'big' ? logo : logoSmall;

    function goBack() {
        if (changeScreen) changeScreen('home');
    }
    
    return <div className={logoClass} onClick={goBack}>
        <img className={`logo-image-${type}`} src={image} alt="" />
        <h1 className="logo-text">ZapRecall</h1>
    </div>
}

export default Logo;