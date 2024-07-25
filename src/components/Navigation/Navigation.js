import React from 'react';
import {useNavigate} from "react-router-dom";
import "./ButtonSize.css";

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
                    className='br3 pa3 grey grow btn shadow-5'>Sign out
            </button>
        </nav>);
    } else {
        return (
            <nav style={{display:'flex', justifyContent: 'flex-end', alignItems:'center', gap: 10}}>
                <button onClick={handleClickSign}
                        className='br3 pa3 grey grow btn shadow-5'>Sign in
                </button>
                <button onClick={handleClickRegister}
                        className='br3 pa3 grey grow btn shadow-5'>Sign up
                </button>
            </nav>);
    }
}
export default Navigation;