import React from 'react';
import {useNavigate, useLocation} from "react-router-dom";
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
    const navigate = useNavigate();
    const {category, inputs} = location.state || {category: '', inputs: []};

    return (
        <div className='tc'>
            <div className='flex justify-between items-center'>
                <h1 className='center f1 washed-yellow bold'>Your List</h1>
                <HomeButton/>
            </div>
            <h2>{category}</h2>

            <div className='grid-container'>
                <div className='grid-header grid-item'>
                    <div><h3> NAME </h3></div>
                    {inputs.map((input, i) => (
                        <div key={i}>
                            <h3>{input.toUpperCase()}</h3>
                        </div>
                    ))}

                    <div><h3> URL </h3></div>
                    <div><h3> RATING </h3></div>
                    <div><h3> ACTIONS </h3></div>
                </div>

            </div>

            <Scroll>
                <div className='grid-container'>

                        <ItemList items={items} inputs={inputs}/>
                        <AddItem/>
                        <ChooseWinButton/>

                </div>
            </Scroll>

        </div>
    )
        ;
}

export default YourListPage;