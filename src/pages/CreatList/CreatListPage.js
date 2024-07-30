import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import HomeButton from "../../components/Navigation/HomeButton";
import './CreatList.css';
import AddIcon from "../../components/AddButton/AddIcon/AddIcon";
import CreatButton from "../../components/Navigation/CreatButton";
import Scroll from "../../components/Scroll";
import ComparInput from "../../components/ComparInput";


const CreatListPage = ({setCategoryData}) => {
    const [category, setCategory] = useState('');
    const [inputs, setInputs] = useState(['']);
    const navigate = useNavigate();

    const handleInputChange = (index, event) => {
        const newInputs = [...inputs];
        newInputs[index] = event.target.value;
        if (index === inputs.length - 1 && event.target.value !== '') {
            newInputs.push('')
        }
        setInputs(newInputs);
    }
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    const handleSubmit = () => {
        const criteria = inputs.filter(input => input.trim() !== '');
        setCategoryData({category, criteria, items: []}); // Update the parent component's state.
        navigate('/yourlist');
    }

    return (
        <div className='tc'>
            <div className='header'>
                <div className='home-button'>
                    <HomeButton/>
                </div>
                <h1 className='title f1 washed-yellow bold'>Creat List</h1>
            </div>
            <h1>COMPARE ALL</h1>

            <Scroll>
                <div className='ma4' >
                    <div className=' input-container icon-place br3 bw2 pa2 shadow-5' style={{backgroundColor: '#FEF5E766'}}>
                        <AddIcon />
                        <div className=' input-container'>
                            <input
                                className="br3 pa3 input-reset ba bg-transparent hover-bg-black-10 hover-white w-100"
                                type="text" name="category" id="category" placeholder='Enter category'
                                value={category} onChange={handleCategoryChange}/>

                            {inputs.map((input, index) => (
                                <ComparInput
                                    key={index}
                                    value={input}
                                    onChange={(e) => handleInputChange(index, e)}
                                />
                            ))}
                            <CreatButton className='center' onClick={handleSubmit}/>
                        </div>

                    </div>
                </div>
            </Scroll>
        </div>
    );
}

export default CreatListPage;