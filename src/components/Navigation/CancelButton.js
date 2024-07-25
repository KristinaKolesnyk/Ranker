import React from 'react';
import {useNavigate} from "react-router-dom";
import "./ButtonSize.css"


const CancelButton = () => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate('/yourlist');
        alert('You have cancelled adding an item');
    }

    return (
        <nav >
            <button onClick={handleClick}
                    className='buttonsize br3 grey grow shadow-5 create-btn'>Cancel
            </button>
        </nav>);
}

export default CancelButton;