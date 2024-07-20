import React from 'react';
import {useNavigate} from "react-router-dom";


const SaveButton = () => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate('/yourlist');
    }

    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <button onClick={handleClick}
                    className=' tr br3 pa3 ma3 grey grow link bg-washed-yellow shadow-5 pointer'>Save
            </button>
        </nav>);
}

export default SaveButton;