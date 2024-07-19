import React from 'react';
import {useNavigate} from "react-router-dom";


const AddIcon = () => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate('/creatlist');
    }

    return (
        <div className="tc dib">
            <div className="bg-washed-yellow br3 grow pa3 ma2 bw2 shadow-5">
                <img
                    onClick={handleClick}
                    alt='icons' src={`/img/add.png`} width='150' height='150'/>

            </div>
            <div>
                <h2>Upload Icon</h2>
            </div>
        </div>
    )
        ;
}

export default AddIcon;
