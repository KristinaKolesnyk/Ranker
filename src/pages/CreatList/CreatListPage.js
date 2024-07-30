import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import HomeButton from "../../components/Navigation/HomeButton";
import './CreatList.css';
import AddIcon from "../../components/AddButton/AddIcon/AddIcon";
import CreatButton from "../../components/Navigation/CreatButton";
import Scroll from "../../components/Scroll";
import ComparInput from "../../components/ComparInput";


const CreatListPage = ({setCategoryData, user}) => {
    const [category, setCategory] = useState('');
    const [inputs, setInputs] = useState(['']);
    //const [userId, setUserId] = useState(['']);
    //const [categoryName, setCategoryName] = useState('');
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

        fetch('http://localhost:3000/creatlist', {
            method: 'POST',
                headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({categoryName: category, userId: user.id, criteriaName:criteria})
        }).then(response => response.json())
            .then(data => {
                if (data) {
                    console.log(user.id);
                    console.log(criteria);
                    setCategory(category)
                    //setInputs(criteria);
                    navigate('/');
                } else {
                    alert('Incorrect credentials');
                }
            })

       /* if (!user.id) {
            alert('Please sign in to create a list');
            return;
        }
        const payload = {
            userId: user.id,
            categoryName: category,
            criteria: criteria
        };

        console.log('Sending payload:', payload);

        fetch('http://localhost:3000/creatlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(response => response.json())
            .then(data => {
                if (data.error) {
                    console.error('Server Error: ', data.error);
                    alert('Failed to create list')
                } else {
                    setCategoryData(prevData => ({
                        ...prevData,
                        [category]: {
                            id: data.categoryId,
                            name: category,
                            criteria,
                            items: []
                        }
                    }));
                    navigate('/yourlist');
                }

            }).catch(error => console.error('Error: ', error))
        */
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
                <div className='ma4'>
                    <div className=' input-container icon-place br3 bw2 pa2 shadow-5'
                         style={{backgroundColor: '#FEF5E766'}}>
                        <AddIcon/>
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