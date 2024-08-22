import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import HomeButton from "../../components/Navigation/HomeButton";
import './CreatList.css';
import AddIcon from "../../components/AddButton/AddIcon";
import CreatButton from "../../components/Navigation/CreatButton";
import Scroll from "../../components/Scroll";
import ComparInput from "../../components/ComparInput";
import Swal from "sweetalert2";

const CreatListPage = ({setCategoryData, user}) => {
    const [category, setCategory] = useState('');
    const [inputs, setInputs] = useState(['']);
    const [iconUrl, setIconUrl] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (index, event) => {
        const newInputs = [...inputs];
        newInputs[index] = event.target.value;
        if (index === inputs.length - 1 && event.target.value !== '') {
            newInputs.push('');
        }
        setInputs(newInputs);
    };

    const handleIconUpload = (url) => {
        setIconUrl(url);
    };

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        if (value.length > 10) {
            setError('Name cannot exceed 10 characters.');
        } else {
            setError('');
            setCategory(value);
        }
    };

    const handleSubmit = () => {
        if (error) {
            Swal.fire({
                icon: "warning",
                title: "Invalid input",
                text: error
            });
            return;
        }

        if (!user || !user.id) {
            alert('Please sign in to create a list');
            return;
        }

        const criteriaNames = inputs.filter(input => input.trim() !== '');
        fetch('http://localhost:3000/creatlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                categoryName: category,
                userId: user.id,
                criteriaName: criteriaNames,
                iconUrl: iconUrl
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Received data:', data); // Для отладки
                if (data && data.category && data.criteria) {
                    setCategoryData(prevData => ({
                        ...prevData,
                        [category]: {
                            id: data.category.id,
                            name: category,
                            criteria: data.criteria.map(criterion => ({
                                id: criterion.id,
                                name: criterion.name
                            })),
                            items: []
                        }
                    }));
                    navigate('/yourlist', {
                        state: {
                            categoryId: data.category.id,
                            categoryName: data.category.name,
                            criteria: data.criteria,
                            items: []
                        }
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Failed to Create List',
                        text: 'There was an issue creating your list. Please ensure all fields are filled out correctly, including the category name, criteria, and icon , then try again.'
                    });
                }
            })
            .catch(err => {
                console.error('Error creating list:', err);
                alert('An error occurred while creating the list. Please try again.');
            });
    };

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
                    <div className='input-container icon-place br3 bw2 pa2 shadow-5' style={{backgroundColor: '#FEF5E766'}}>
                        <AddIcon onIconUpload={handleIconUpload}/>
                        <div className='input-container'>
                            <input
                                className="br3 pa3 input-reset ba bg-transparent hover-bg-black-10 hover-white w-100"
                                type="text"
                                name="category"
                                id="category"
                                placeholder='Enter category'
                                value={category}
                                onChange={handleCategoryChange}
                            />
                            {error && <div style={{color: 'red'}}>{error}</div>}

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
