import {BsFillXCircleFill, BsFillCheckCircleFill, BsFillQuestionCircleFill} from 'react-icons/bs';
import './AnswerIcon.css';

const iconsMap = {
    forgot: BsFillXCircleFill,
    remember: BsFillQuestionCircleFill,
    zap: BsFillCheckCircleFill,
};

function AnswerIcon({type}) {
    const Icon = iconsMap[type];

    return <div className={`answer-icon ${type}`}>
        {!!type && <Icon/>}
    </div>
}

export default AnswerIcon