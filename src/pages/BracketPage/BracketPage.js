import React, {useEffect, useState} from 'react';
import HomeButton from "../../components/Navigation/HomeButton";
//import WinCard from "../../components/WinCard/WinCard";
import './Bracket.css';
import ParticlesBg from "particles-bg";
import {useLocation} from "react-router-dom";

let config = {
    number: {
        value: 30,
        density: {
            enable: true,
            value_area: 800
        }
    }
};


const BracketPage = ({categoryData}) => {
    const location = useLocation();
    const {items = []} = location.state || {};
    const [currentPair, setCurrentPair] = useState([0, 1]);
    const [winners, setWinners] = useState([]);

    useEffect(() => {
        console.log('Recieved items: ', items);
    }, [items]);

    if (items.length === 0) {
        return <div>No items found. Please create a list first.</div>;
    }

    const handleSelectedWinner = (winner) => {
        setWinners([...winners, winner]);
        const nextIndex = currentPair[1] + 1;
        if (nextIndex < items.length) {
            setCurrentPair([currentPair[1], nextIndex]);
        } else if (winners.length === items.length - 1) {
            console.log('Winner found! The winner is: ', winner);
        } else {
            setCurrentPair([0, 1]);
        }
    }

    return (
        <div className='tc'>
            <ParticlesBg type='square' config={config} bg={true}/>
            <div className='header'>
                <div className='home-button'>
                    <HomeButton/>
                </div>
                <h1 className='title f1 washed-yellow bold'>Find Your Winner</h1>
            </div>

            <div className='card-place'>
                <h2 className='itemcard grow shadow-5'
                    onClick={() => handleSelectedWinner(items[currentPair[0]])}>{items[currentPair[0]].name}</h2>

                <h2 className='itemcard grow shadow-5'
                    onClick={() => handleSelectedWinner(items[currentPair[1]])}>{items[currentPair[1]].name}</h2>
            </div>

        </div>);
}

export default BracketPage;

