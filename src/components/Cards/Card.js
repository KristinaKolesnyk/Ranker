import React from 'react';
import {useNavigate} from "react-router-dom";
import {criteriaByCategory} from "../../data";


const Card = ({name, id}) => {
    let navigate = useNavigate();
    const handleClick = () => {
        const criteria = criteriaByCategory[name] || [];
        navigate(`/yourlist`, {state: {category: name, criteria}});
    }
    return (
        <div className='tc dib' onClick={handleClick}>
            <div className="bg-washed-yellow br3 grow pa3 ma2 bw2 shadow-5">
                <img alt='categories' src={`/img/${id}.png`}  width='250' height='250'/>
            </div>

            <div>
                <h2>{name}</h2>
            </div>
        </div>
    );
}

export default Card;


//`https://robohash.org/${id}?200x200`