import React, {useState} from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import HomeButton from "../../components/Navigation/HomeButton";
import Scroll from "../../components/Scroll";
import './AddToListPage.css';
import SaveButton from "../../components/Navigation/SaveButton";
import CancelButton from "../../components/Navigation/CancelButton";


const AddToListPage = () => {
    const location = useLocation();
    const {inputs: criteria = []} = location.state || {inputs: []};

    const navigate = useNavigate();



    const handleSubmit = () => {
        navigate('/yourlist');
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
                            />
                        <input
                            className="br3 pa3 input-reset ba bg-transparent hover-bg-black-10 hover-white w-100"
                            type="text" name="rating" id="rating" placeholder='Enter a rating for criterion'/>

                        <input
                            className="br3 pa3 input-reset ba bg-transparent hover-bg-black-10 hover-white w-100"
                            type="text" name="url" id="url" placeholder='Enter URL (optional)'
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


export default AddToListPage;