import React from 'react';
import {useNavigate} from "react-router-dom";
//import {criteriaByCategory, itemsByCategory} from "../../data";

const Card = ({name, id, icon}) => {
    let navigate = useNavigate();
    const handleClick = () => {
       // const criteria = criteriaByCategory[name] || [];
        //const items = itemsByCategory[name] || [];
       // navigate(`/yourlist`, {state: {category: name, criteria, items}});
       navigate(`/yourlist`, {state: {category: name}});
    }
    return (
        <div className='tc dib' onClick={handleClick}>
            <div className="bg-washed-yellow br3 grow pa3 ma2 bw2 shadow-5">
                <img alt='categories' src={`http://localhost:3000${icon}`} width='250' height='250'/>

            </div>

            <div>
                <h2>{name}</h2>
            </div>
        </div>
    );
}
export default Card;

