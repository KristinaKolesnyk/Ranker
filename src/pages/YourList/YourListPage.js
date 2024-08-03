import React from 'react';
import { useLocation} from "react-router-dom";
import HomeButton from "../../components/Navigation/HomeButton";
import '../CreatList/CreatList.css';
import Scroll from "../../components/Scroll";
import AddItem from "../../components/AddButton/AddItem";
import "./YourList.css";
import ItemList from "../../components/Items/ItemList";
import ChooseWinButton from "../../components/Navigation/ChooseWinButton";
//import {itemsByCategory} from "../../data";


const YourListPage = ({categoryData}) => {
    const location = useLocation();
    const state = location.state || categoryData || {};
    const {category,criteria=[], inputs=[], items=[]} = state;
    const allCriteria = [...criteria, category, ...inputs.filter(input => input.trim()!== '')];

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
                    {allCriteria.map((criterion, i) => (
                        <div key={i}>
                             <h2>{criterion.toUpperCase()}</h2>
                        </div>
                    ))}

                    <div><h2> URL </h2></div>
                    <div><h2> RATING </h2></div>
                    <div><h2> ACTIONS </h2></div>

                </div>
            </div>

            <Scroll>
                <div className='grid-container'>
                    <ItemList items={items} inputs={inputs}/>
                </div>


            <AddItem criteria={allCriteria} />
            <ChooseWinButton items={items}/>
            </Scroll>
        </div>
    );
}

export default YourListPage;