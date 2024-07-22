import React from 'react';
import {useNavigate} from "react-router-dom";

const AddIcon = () => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate('/creatlist');
    }

    return (
        <div className="tc ma3-l dib">
            <div className="bg-washed-yellow br3 grow ma2 pa3 bw2 shadow-5">
                <img
                    onClick={handleClick}
                    alt='icons' src={`/img/add.png`} width='70' height='70'/>
            </div>
            <div>
                <h2 className=''>Upload Icon</h2>
            </div>
        </div>
    );
}

export default AddIcon;
