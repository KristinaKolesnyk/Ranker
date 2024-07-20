import React from 'react';
import {useNavigate} from "react-router-dom";


const ChooseWinButton = () => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate('/bracketpage');
    }

    return (
        <div className='tc dib'>
            <div className="bg-washed-yellow br-100 grow pa3 ma2 bw2 shadow-5">
                <img
                    onClick={handleClick}
                    alt='categories' src={`/img/choose.png`}  width='70' height='70'/>
            </div>

            <div>
                <h2>Winner</h2>
            </div>
        </div>
    );
}

export default ChooseWinButton;
