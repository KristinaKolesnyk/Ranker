import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {

    if (isSignedIn) {
        return (<nav style={{display:'flex', justifyContent: 'flex-end'}}>
            <button onClick={() => onRouteChange('logout')}
                    className=' tr br3 pa3 ma3 grey grow link bg-washed-yellow shadow-5 pointer'>Sign out
            </button>
        </nav>);
    } else {
        return (
            <nav style={{display:'flex', justifyContent: 'flex-end'}}>
                <button onClick={() => onRouteChange('signin')}
                        className='tr br3 pa3 ma3 grey grow link bg-washed-yellow shadow-5 pointer'>Sign in
                </button>
                <button onClick={() => onRouteChange('register')}
                        className='tr br3 pa3 ma3 grey grow link bg-washed-yellow shadow-5 pointer'>Sign up
                </button>
            </nav>);
    }
}

export default Navigation;