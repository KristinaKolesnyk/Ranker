import React, {useState} from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import HomeButton from "../../components/Navigation/HomeButton";
import Scroll from "../../components/Scroll";
import './AddToListPage.css';
import SaveButton from "../../components/Navigation/SaveButton";
import CancelButton from "../../components/Navigation/CancelButton";


const AddToListPage = ({categoryData, setCategoryData, user}) => {
    const location = useLocation();
    const {criteria = [], categoryId} = location.state || {criteria: [], categoryId: null};
    const navigate = useNavigate();
    const [item, setItem] = useState('');
    const [url, setUrl] = useState('');
    const [ratings, setRating] = useState(criteria.map(() => ''));

    const handleInputChange = (index, event) => {
        const newRatings = [...ratings];
        newRatings[index] = event.target.value;
        setRating(newRatings);
    }

    const handleSubmit = () => {
        const newItem = {
            categoryId,
            name: item,
            url,
            ratings
        }
        fetch('http://localhost:3000/addtolist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem)
        }).then(response => {
            if (!response.ok) {
                throw new Error('Failed to add item')
            }
            return response.json();
        })
            .then(data => {
                console.log('Item added successfully:', data)
                navigate('/yourlist', {state: {categoryId, categoryName: categoryData.name}})
            })
            .catch(error => {
                console.error('Error adding item:', error)
            })
    }

    return (
        <div className='tc'>
            <div className='header'>
                <div className='home-button'>
                    <HomeButton/>
                </div>
                <h1 className='title f1 washed-yellow bold'>Add Item</h1>
            </div>

            <Scroll>
                <div className='tc box dib input-container br3 bw2 shadow-5'>
                    <input
                        className="br3 pa3 input-reset ba bg-transparent hover-bg-black-10 hover-white w-100"
                        type="text" name="itemName" id="itemName" placeholder='Enter name'
                        value={item}
                        onChange={(e) => setItem(e.target.value)}  // Call the parent function when the input changes.
                    />

                    {criteria.map((criterion, i) => (
                            <input
                                key={i}
                                className="br3 pa3 input-reset ba bg-transparent hover-bg-black-10 hover-white w-100"
                                type="number" name={`rating${i}`} id={`rating${i}`}
                                placeholder={`Enter a rating for ${criterion.name.toLowerCase()}`}
                                value={ratings[i]}
                                onChange={(e) => handleInputChange(i, e)}  // Call the parent function when the input changes.
                            />
                    ))}

                    <input
                        className="br3 pa3 input-reset ba bg-transparent hover-bg-black-10 hover-white w-100"
                        type="url" name="url" id="url" placeholder='Enter URL (optional)'
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}  // Call the parent function when the input changes.
                    />
                    <div className='button-container'>
                        <SaveButton onClick={handleSubmit}/>
                        <CancelButton/>
                    </div>
                </div>
            </Scroll>
        </div>
    );
}

export default AddToListPage;