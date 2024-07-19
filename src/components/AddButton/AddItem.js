import React from 'react';
import {useNavigate} from "react-router-dom";


const AddItem = () => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate('/creatlist');
    }

    return (
        <div className="tc dib">
            <div className="bg-washed-yellow br-100 grow pa3 ma2 bw2 shadow-5">
                <img
                    onClick={handleClick}
                    alt='item' src={`/img/add.png`} width='70' height='70'/>

            </div>
            <div>
                <h2>Add Item</h2>
            </div>
        </div>
    )
        ;
}

export default AddItem;
