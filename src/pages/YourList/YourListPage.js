import React, {useCallback, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import HomeButton from "../../components/Navigation/HomeButton";
import '../CreatList/CreatList.css';
import Scroll from "../../components/Scroll";
import AddItem from "../../components/AddButton/AddItem";
import "./YourList.css";
import ItemList from "../../components/Items/ItemList";
import ChooseWinButton from "../../components/Navigation/ChooseWinButton";

const YourListPage = () => {
    const location = useLocation();
    const {categoryId, categoryName, criteria: initialCriteria =[], items: initialItems =[]} = location.state || {};
    const [category, setCategory] = useState(categoryName || '');
    const [criteria, setCriteria] = useState(initialCriteria);
    const [items, setItems] = useState(initialItems);

    const fetchCategoryData = useCallback(() => {
        if (categoryId) {
            fetch(`http://localhost:3000/category/${categoryId}`)
                .then(response => response.json())
                .then(data => {
                    setCategory(data.category.name);
                    setCriteria(data.criteria);
                    setItems(data.items);
                })
                .catch(err => {
                    console.error('Error fetching category data', err);
                });
        }
    }, [categoryId]);

    useEffect(() => {
        if(!initialCriteria.length || !initialItems.length) {
            fetchCategoryData();
        }
    }, [categoryId, fetchCategoryData, initialCriteria.length, initialItems.length]);

    const handleDeleteItem = (itemId) => {
        fetch(`http://localhost:3000/deleteitem/${itemId}`,{
            method: 'DELETE',
        }).then(response =>{
            if(!response.ok){
                throw new Error('Failed to delete item');
            }
            setItems(prevItems =>  prevItems.filter(item => item.id!== itemId));
        }).catch(error =>{
            console.error('Error deleting item', error);
            }
        )
    }

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
                <div className='space'>
                    <div className='grid-container'>
                        <ItemList items={items} categoryId={categoryId} categoryName={category} criteria={criteria}
                                  onDelete={handleDeleteItem}/>
                    </div>
                    <AddItem criteria={criteria} categoryId={categoryId} categoryName={category}
                             onItemAdded={fetchCategoryData}/>
                    <ChooseWinButton items={items}/>
                </div>
            </Scroll>
        </div>
);
}

export default YourListPage;
