import React from 'react';
import {useNavigate} from "react-router-dom";
import "./ButtonSize.css"


const SaveButton = () => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate('/yourlist');
    }

    return (
        <nav >
            <button onClick={handleClick}
                    className='buttonsize br3  grey grow link bg-washed-yellow shadow-5 pointer'>Save
            </button>
        </nav>);
}

export default SaveButton;