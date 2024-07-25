import React from 'react';
import {useNavigate} from "react-router-dom";
import "./ButtonSize.css"


const HomeButton = () => {
    let navigate = useNavigate();
    const handleClickHome = () => {
        navigate('/');
    }
    return (
        <nav >
            <button onClick={handleClickHome}
                    className='br3 pa3 ma3 grey grow btn shadow-5'>Home Page
            </button>
        </nav>);
}

export default HomeButton;