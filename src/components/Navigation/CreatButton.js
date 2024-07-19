import React from 'react';


const CreatButton = ({onClick}) => {

    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <button onClick={onClick}
                    className=' tr br3 pa3 ma3 grey grow link bg-washed-yellow shadow-5 pointer'>Creat list
            </button>
        </nav>);
}

export default CreatButton;