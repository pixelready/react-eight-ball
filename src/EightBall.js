import React, {useState} from "react";
import './EightBall.css';

/**
 * 
 * 
 */
function EightBall({answers}){
    const [msg, setMsg] = useState("Think of a question");
    const [color, setColor] = useState("black");
    
    function _getRandomAnswer(){
        const randAnswerIdx = Math.floor(Math.random() * answers.length);
        return answers[randAnswerIdx];
    };

    function handleClick(){
        const {msg,color} = _getRandomAnswer();
        setMsg(msg);
        setColor(color);
    }

    let eightBallBackground = {backgroundColor: color};
    return (
        <button 
            onClick={handleClick} 
            className="eightball-button" 
            style={eightBallBackground}
        >
            {msg}
        </button>
    );
    

}

export default EightBall;