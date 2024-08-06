import React, {useEffect, useState} from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import HomeButton from "../../components/Navigation/HomeButton";
import Scroll from "../../components/Scroll";
import './EditItemPage.css';
import SaveButton from "../../components/Navigation/SaveButton";
import CancelButton from "../../components/Navigation/CancelButton";


const EditItemPage = () => {
    const location = useLocation();
    const {id, name, criterions, url: initialUrl, criteria, categoryId, categoryName} = location.state || {criteria: [], criterions: []};
    const navigate = useNavigate();
    const [url, setUrl] = useState(initialUrl||'');
    const [ratings, setRating] = useState(criteria.map(c =>{
        const criterion = criterions.find(cr => cr.criterion_id === c.id);
        return criterion ? criterion.value : '-';
    }));

    useEffect(() =>{
        if(!location.state){
            navigate('/yourlist');
        }
    },[location.state, navigate])

    const handleInputChange = (index, event) => {
        const newRatings = [...ratings];
        newRatings[index] = event.target.value;
        setRating(newRatings);
    }

    const handleSubmit = () => {
        const updatedItem = {
            id,
            url,
            ratings,
            criteria: criteria.map(c => c.id)
        }
        fetch('http://localhost:3000/edititem', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedItem)
        }).then(response => {
            if (!response.ok) {
                throw new Error('Failed to update item')
            }
            return response.json();
        })
            .then(() => {
                navigate('/yourlist', {
                    state: {categoryId, categoryName, criteria, items: location.state.items},
                    replace: true
                })

                if(location.state.onItemAdded){
                    location.state.onItemAdded();
                }
            })
            .catch(error => {
                console.error('Error updating item:', error)
            })
    }

    return (
        <div className='tc'>
            <div className='header'>
                <div className='home-button'>
                    <HomeButton/>
                </div>
                <h1 className='title f1 washed-yellow bold'>{`Edit ${name}`}</h1>
            </div>

            <Scroll>
                    {criteria.map((criterion, i) => (
                        <input
                            key={i}
                            className="br3 pa3 input-reset ba bg-transparent hover-bg-black-10 hover-white w-100"
                            type="number" name={`rating${i}`} id={`rating${i}`}
                            placeholder={`Enter a rating for ${criterion.name.toLowerCase()}`}
                            value={ratings[i]}
                            onChange={(e) => handleInputChange(i, e)}
                        />
                    ))}

                    <input
                        className="br3 pa3 input-reset ba bg-transparent hover-bg-black-10 hover-white w-100"
                        type="url" name="url" id="url" placeholder='Enter URL (optional)'
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <div className='button-container'>
                        <SaveButton onClick={handleSubmit}/>
                        <CancelButton/>
                    </div>
            </Scroll>
        </div>
    );
}

export default EditItemPage;