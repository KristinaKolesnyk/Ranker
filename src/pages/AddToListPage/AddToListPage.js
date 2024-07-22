import React, {useState} from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import HomeButton from "../../components/Navigation/HomeButton";
import Scroll from "../../components/Scroll";
import './AddToListPage.css';
import SaveButton from "../../components/Navigation/SaveButton";
import CancelButton from "../../components/Navigation/CancelButton";


const AddToListPage = ({categoryData, setCategoryData}) => {
    const location = useLocation();
    const {criteria = []} = location.state || {criteria: []};
    const navigate = useNavigate();
    const [itemName, setItemName] = useState('');
    const [url, setUrl] = useState('');
    const [ratings, setRating] = useState(criteria.map(() => ''));

    const handleInputChange = (index, event) => {
        const newRatings = [...ratings];
        newRatings[index] = event.target.value;
        setRating(newRatings);
    }

    const handleSubmit = () => {
        const newItem = {
            id: (categoryData.items?.length || 0) + 1,
            name: itemName,
            criterions: ratings,
            URL: url,
            rating: 3,
        };
        setCategoryData({
            ...categoryData,  // keep all other properties the same, just add new item to items array
            items: [...(categoryData.items || []), newItem]
        });
        navigate('/yourlist', {state: {...categoryData, items: [...categoryData.items, newItem]}});
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
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}  // Call the parent function when the input changes.
                    />

                    {criteria.map((criterion, i) => (
                        <input
                            key={i}
                            className="br3 pa3 input-reset ba bg-transparent hover-bg-black-10 hover-white w-100"
                            type="text" name={`rating${i}`} id={`rating${i}`}
                            placeholder={`Enter a rating for ${criterion.toLowerCase()}`}
                            value={ratings[i]}
                            onChange={(e) => handleInputChange(i, e)}  // Call the parent function when the input changes.
                        />
                    ))}

                    <input
                        className="br3 pa3 input-reset ba bg-transparent hover-bg-black-10 hover-white w-100"
                        type="text" name="url" id="url" placeholder='Enter URL (optional)'
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}  // Call the parent function when the input changes.
                    />
                    <div className='button input-container'>
                        <SaveButton onClick={handleSubmit}/>
                        <CancelButton/>
                    </div>
                </div>

            </Scroll>
        </div>
    );
}

//name={`criterion${i+1}`} id={`criterion${i+1}`} placeholder={`Enter criterion ${i+1}`}
export default AddToListPage;