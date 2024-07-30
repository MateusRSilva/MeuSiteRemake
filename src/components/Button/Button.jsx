import React, { useState } from 'react';
import './Button.css'

function Button() {
    const [showBalloon, setShowBalloon] = useState(false);

    const handleClick = () => {
        setShowBalloon(!showBalloon);
    };
    return (
        <>
            <div className='helpButtonContainer'>
                <div className="button" onClick={handleClick}>
                    <a>?</a>
                </div>
                {showBalloon && (
                    <div className="balloon">
                        <div className="balloon-content">
                           <p>Interaja com meu quarto para saber mais sobre mim! </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Button;
