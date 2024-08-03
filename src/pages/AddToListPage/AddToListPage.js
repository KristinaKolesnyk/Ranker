import React, {useState} from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import HomeButton from "../../components/Navigation/HomeButton";
import Scroll from "../../components/Scroll";
import './AddToListPage.css';
import SaveButton from "../../components/Navigation/SaveButton";
import CancelButton from "../../components/Navigation/CancelButton";


const AddToListPage = ({categoryData, setCategoryData, user}) => {
    const location = useLocation();
    const {criteria = [], category} = location.state || {criteria: [], category: null};
    const navigate = useNavigate();
    const [item, setItem] = useState('');
    const [url, setUrl] = useState('');
    const [ratings, setRating] = useState(criteria.map(() => ''));

    const handleInputChange = (index, event) => {
        const newRatings = [...ratings];
        newRatings[index] = event.target.value;
        setRating(newRatings);
    }

    const calculateAverageRating = () => {
        const numericRatings = ratings.map(r => parseFloat(r)).filter(r => !isNaN(r));
        const sum = numericRatings.reduce((acc, val) => acc + val, 0);
        const average = numericRatings.length > 0 ? sum / numericRatings.length : 0;
        return parseFloat(average.toFixed(1));
    }

    const handleSubmit = () => {
        const averageRating = calculateAverageRating();
        const criterionIds = criteria.map(c => c.id)
        const categoryId = category;

        if (!user.id) {
            alert('Please sign in to create a list');
            return;
        }
        console.log('Data received:',
            '\nitemName: ' + item,
            '\ncategoryId: ' + categoryId,
            '\nitemUrl: ' + url,
            '\nratingValue: ' + ratings,
            '\navgRating: ' + averageRating,
            '\ncriterionIds: ' + criterionIds)

        fetch('http://localhost:3000/creatlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                itemName: item,
                categoryId: categoryId,
                itemUrl: url,
                ratingValue: ratings,
                avgRating: averageRating,
                criterionIds: criterionIds
            })
        }).then(response => response.json())
            .then(data => {
                const newItem = {
                    itemName: item,
                    categoryId: categoryId,
                    itemUrl: url,
                    ratingValue: ratings,
                    avgRating: averageRating,
                    criterionIds: criterionIds
                };
                if (data) {
                    const updatedItems = [...(categoryData.items || []), newItem];
                    setCategoryData({
                        ...categoryData,
                        items: updatedItems
                    });

                    navigate('/yourlist', {state: {...categoryData, items: updatedItems}});
                } else {
                    alert('Incorrect credentials');
                }
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
                            placeholder={`Enter a rating for ${(criterion?.name || '').toLowerCase()}`}
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