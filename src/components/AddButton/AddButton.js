import React from 'react';
import {useNavigate} from "react-router-dom";


const AddButton = () => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate('/creatlist');
    }

    return (
        <div className='tc dib'>
            <div className="bg-washed-yellow br3 grow pa3 ma2 bw2 shadow-5">
                <img
                    onClick={handleClick}
                    alt='categories' src={`/img/add.png`}  width='250' height='250'/>
            </div>

            <div>
                <h2>Creat List</h2>
            </div>
        </div>
    );
}

export default AddButton;
