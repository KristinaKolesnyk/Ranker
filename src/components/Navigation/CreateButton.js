import React from 'react';
import "./ButtonSize.css"

const CreateButton = ({onClick}) => {

    return (
        <nav >
            <button onClick={onClick}
                    className='create-btn br3 pa3 ma3 grey grow shadow-5'>Creat list
            </button>
        </nav>);
}

export default CreateButton;