import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import HomeButton from "../../components/Navigation/HomeButton";
import '../CreatList/CreatList.css';
import Scroll from "../../components/Scroll";
import AddItem from "../../components/AddButton/AddItem";
import "./YourList.css";
import ItemList from "../../components/Items/ItemList";
import ChooseWinButton from "../../components/Navigation/ChooseWinButton";

const YourListPage = ({categoryData}) => {
    const location = useLocation();
    const {categoryId, categoryName} = location.state || {};
    const [category, setCategory] = useState(categoryName || '');
    const [criteria, setCriteria] = useState([]);
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (categoryId) {
            fetch(`http://localhost:3000/category/${categoryId}`)
                .then(response => response.json())
                .then(data => {
                    setCategory(data.category.name);
                    setCriteria(data.criteria);
                    setItems(data.items); //.map((item, index) => ({ ...item, key: `${item.id}-${index}` }))
                })
                .catch(err => {
                    console.error('Error fetching category data', err);
                    setError('Unable to fetch category data');
                });
        }
    }, [categoryId]);

    return (
        <div className='tc'>
            <div className='header'>
                <div className='home-button'>
                    <HomeButton/>
                </div>
                <h1 className='title f1 washed-yellow bold'>Your List</h1>
            </div>
            <h1 className='pa3-ns'>{category}</h1>

            <div className='grid-container'>
                <div className='grid-header grid-item'>
                    <div><h2> NAME </h2></div>
                    {criteria.map((criterion, i) => (
                        <div key={i}>
                            <h2>{criterion.name.toUpperCase()}</h2>
                        </div>
                    ))}
                    <div><h2> URL </h2></div>
                    <div><h2> RATING </h2></div>
                    <div><h2> ACTIONS </h2></div>
                </div>
            </div>

            <Scroll>
                <div className='grid-container'>
                    <ItemList items={items} criteria={criteria}/>
                </div>
                <AddItem criteria={criteria} categoryId={categoryId} categoryName={category}/>
                <ChooseWinButton items={items}/>
            </Scroll>
        </div>
    );
}

export default YourListPage;
