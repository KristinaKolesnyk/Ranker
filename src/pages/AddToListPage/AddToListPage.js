import React, {useState} from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import HomeButton from "../../components/Navigation/HomeButton";
import Scroll from "../../components/Scroll";
import './AddToListPage.css';
import SaveButton from "../../components/Navigation/SaveButton";


const AddToListPage = () => {
    const location = useLocation();
    const {inputs: criteria = []} = location.state || {inputs: []};
    const [itemName, setItemName] = useState('');
    const [url, setURL] = useState('');
    //const [ratings, setRating] = useState(criteria.map(() => ''));
    const navigate = useNavigate();


    /*const handleInputChange = (index, event) => {
        const newRatings = [...ratings];
        newRatings[index] = event.target.value;
        setRating(newRatings);
    }*/
    const handleName = (event) => {
        setItemName(event.target.value);
    }
    const handleURL = (event) => {
        setURL(event.target.value);
    }

    const handleSubmit = () => {
        navigate('/yourlist', {state: {itemName, url}});
    }

    return (
        <div className='tc'>
            <div className='flex justify-between items-center'>
                <h1 className='center f1 washed-yellow bold'>Add Item</h1>
                <HomeButton/>
            </div>

            <Scroll>
                <div className='center'>
                    <div className='tc dib input-container'>

                        <input
                            className="br3 pa3 input-reset ba bg-transparent hover-bg-black-10 hover-white w-100"
                            type="text" name="itemName" id="itemName" placeholder='Enter name'
                            value={itemName} onChange={handleName}/>
                        <input
                            className="br3 pa3 input-reset ba bg-transparent hover-bg-black-10 hover-white w-100"
                            type="text" name="rating" id="rating" placeholder='Enter a rating for criterion'/>

                        <input
                            className="br3 pa3 input-reset ba bg-transparent hover-bg-black-10 hover-white w-100"
                            type="text" name="url" id="url" placeholder='Enter URL (optional)'
                            value={url} onChange={handleURL}/>

                        <SaveButton onClick={handleSubmit}/>
                    </div>

                </div>

            </Scroll>
        </div>
    );
}
/*  {criteria == null || criteria.length === 0
                            ? criteria.map((criterion, index) => (
                                <input
                                    key={index}
                                    className="br3 pa3 input-reset ba bg-transparent hover-bg-black-10 hover-white w-100"
                                    type="text" name="rating" id="rating" placeholder='Enter a rating for criterion'
                                    value={ratings[index]} onChange={(e) => handleInputChange(index, e)}/>

                            )) :
                            <input
                                className="br3 pa3 input-reset ba bg-transparent hover-bg-black-10 hover-white w-100"
                                type="text" name="rating" id="rating" placeholder='Something went wrong'/>
                        }*/

export default AddToListPage;