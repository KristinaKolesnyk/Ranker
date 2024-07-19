import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import HomeButton from "../../components/Navigation/HomeButton";
import './CreatList.css';
import AddIcon from "../../components/AddButton/AddIcon";
import CreatButton from "../../components/Navigation/CreatButton";
import Scroll from "../../components/Scroll";
import ComparInput from "../../components/ComparInput";


const CreatListPage = () => {
    const [category, setCategory] = useState('');
    const navigate = useNavigate();
    const [inputs, setInputs] = useState(['']);

    const handleInputChange = (index, event) => {
        const newInputs = [...inputs];
        newInputs[index] = event.target.value;
        if(index===inputs.length-1 && event.target.value!==''){
            newInputs.push('')
        }

        setInputs(newInputs);
    }
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    const handleSubmit = () => {
        navigate('/yourlist', {state: {category, inputs}});
    }

    return (
        <div className='tc'>
            <div className='flex justify-between items-center'>
                <h1 className='center f1 washed-yellow bold'>Creat List</h1>
                <HomeButton/>
            </div>
            <h2>COMPARE ALL</h2>

            <Scroll>
            <div className='center'>
                <AddIcon/>
                <div className='tc dib input-container'>
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
                    <CreatButton onClick={handleSubmit}/>
                </div>

            </div>

            </Scroll>
        </div>
    );
}

export default CreatListPage;