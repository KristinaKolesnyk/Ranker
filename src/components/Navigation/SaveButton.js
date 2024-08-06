import React from 'react';
import "./ButtonSize.css"


const SaveButton = ({onClick}) => {

    return (
        <nav >
            <button onClick={onClick}
                    className='buttonsize br3 grey grow shadow-5 create-btn'>Save
            </button>
        </nav>);
}

export default SaveButton;