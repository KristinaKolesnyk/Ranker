import React from 'react';
import {useNavigate, useLocation} from "react-router-dom";



const AddItem = ({criteria}) => {
    let navigate = useNavigate();
    const location = useLocation();
   // const {category, criteria =[]} = location.state || {category: '', criteria: []};

    const handleClick = () => {
        navigate('/addtolist', {state: {criteria}});
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
