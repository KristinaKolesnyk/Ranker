import React from 'react';
import HomeButton from "../components/Navigation/HomeButton";
import WinCard from "../components/WinCard/WinCard";

const BracketPage = () => {
    return (
        <div className='tc'>
            <div className='flex justify-between items-center'>
                <h1 className='center f1 washed-yellow bold'>Find Your Winner</h1>
                <HomeButton/>
            </div>
            <WinCard/>
            <WinCard/>
        </div>);
}

export default BracketPage;