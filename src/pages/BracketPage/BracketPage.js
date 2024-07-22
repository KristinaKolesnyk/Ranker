import React from 'react';
import HomeButton from "../../components/Navigation/HomeButton";
import WinCard from "../../components/WinCard/WinCard";
import './Bracket.css';
import ParticlesBg from "particles-bg";


let config = {
    number: {
        value: 30,
        density: {
            enable: true,
            value_area: 800
        }}};


const BracketPage = () => {
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
                <WinCard/>
                <WinCard/>
            </div>
        </div>);
}

export default BracketPage;

/* categories.map((category, i) => {
                    return (
                        <Card
                            key={i}
                            id={categories[i].id}
                            name={categories[i].name}
                        />
                    );
                    */
