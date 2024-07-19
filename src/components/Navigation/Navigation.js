import React from 'react';
import {useNavigate} from "react-router-dom";

const Navigation = ({onRouteChange, isSignedIn}) => {
    let navigate = useNavigate();
    const handleClickSign = () => {
        navigate('/signin');
    }
    const handleClickRegister = () => {
        navigate('/signup');
    }
    const handleClickHome = () => {
        navigate('/');
    }

    if (isSignedIn) {
        return (<nav style={{display:'flex', justifyContent: 'flex-end', alignItems:'center'}}>
            <button onClick={handleClickHome}
                    className=' tr br3 pa3 ma3 grey grow link bg-washed-yellow shadow-5 pointer'>Sign out
            </button>
        </nav>);
    } else {
        return (
            <nav style={{display:'flex', justifyContent: 'flex-end', alignItems:'center'}}>
                <button onClick={handleClickSign}
                        className='tr br3 pa3 ma3 grey grow link bg-washed-yellow shadow-5 pointer'>Sign in
                </button>
                <button onClick={handleClickRegister}
                        className='tr br3 pa3 ma3 grey grow link bg-washed-yellow shadow-5 pointer'>Sign up
                </button>
            </nav>);
    }
}
export default Navigation;