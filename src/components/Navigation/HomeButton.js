import React from 'react';
import {useNavigate} from "react-router-dom";

const HomeButton = () => {
    let navigate = useNavigate();
    const handleClickHome = () => {
        navigate('/');
    }
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <button onClick={handleClickHome}
                    className=' tr br3 pa3 ma3 grey grow link bg-washed-yellow shadow-5 pointer'>Home Page
            </button>
        </nav>);
}

export default HomeButton;