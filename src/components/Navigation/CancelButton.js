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
                    className=' buttonsize br3 grey grow link bg-washed-yellow shadow-5 pointer'>Cancel
            </button>
        </nav>);
}

export default CancelButton;