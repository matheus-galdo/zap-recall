import './ButtonHome.css';

function ButtonHome({onClick, children}) {
    return <button className="button-home" onClick={onClick}>
        {children}
    </button>;
}

export default ButtonHome;