import React from 'react';
import { useLocation} from "react-router-dom";
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
    //const navigate = useNavigate();
    const {category, inputs} = location.state || {category: '', inputs: []};

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
                    {inputs.filter(input => input.trim() !== '').map((input, i) => (
                        <div key={i}>
                             <h2>{input.toUpperCase()}</h2>
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


            <AddItem/>
            <ChooseWinButton/>
            </Scroll>
        </div>
    )
        ;
}

export default YourListPage;