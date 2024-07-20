import React from 'react';
import {useLocation} from "react-router-dom";
import HomeButton from "../../components/Navigation/HomeButton";
import '../CreatList/CreatList.css';
import Scroll from "../../components/Scroll";
import AddItem from "../../components/AddButton/AddItem";
import "./YourList.css";
import ItemList from "../../components/Items/ItemList";
import {items} from "../../items";
import ChooseWinButton from "../../components/Navigation/ChooseWinButton";


const YourListPage = () => {
    const location = useLocation();
    const {category, inputs} = location.state || {category: '', inputs: []};

    return (
        <div className='tc'>
            <div className='flex justify-between items-center'>
                <h1 className='center f1 washed-yellow bold'>Your List</h1>
                <HomeButton/>
            </div>
            <h2>{category}</h2>
            <div className='wrapping pa3 ma3 flex justify-between items-center'>
                <h3> NAME </h3>
                {inputs.map((input, index) => (
                    <h3 key={index} id='criterion'>{input}</h3>
                ))}
                <h3> URL </h3>
                <h3> RATING </h3>
            </div>

            <Scroll>
                <ItemList items={items}/>
                <AddItem/>
                <ChooseWinButton/>

            </Scroll>
        </div>
    );
}

export default YourListPage;