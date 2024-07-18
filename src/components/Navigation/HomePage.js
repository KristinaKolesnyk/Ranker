import React from 'react';

const HomePage = ({onRouteChange, isSignedIn}) => {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <button onClick={() => onRouteChange('home')}
                className=' tr br3 pa3 ma3 grey grow link bg-washed-yellow shadow-5 pointer'>Home Page
        </button>
    </nav>);
}

export default HomePage;