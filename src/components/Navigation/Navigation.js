import React from 'react';
import {useNavigate} from "react-router-dom";
import "./ButtonSize.css";

const Navigation = ({isSignedIn, signOut}) => {
    let navigate = useNavigate();
//checking git
    const handleSignOut = () => {
        signOut();
        navigate('/');
    }
    const handleSignIn = () => {
        navigate('/signin');
    }
    const handleRegister = () => {
        navigate('/signup');
    }

    if (isSignedIn) {
        return (<nav style={{display:'flex', justifyContent: 'flex-end', alignItems:'center'}}>
            <button onClick={handleSignOut}
                    className='br3 pa3 grey grow btn shadow-5'>Sign out
            </button>
        </nav>);
    } else {
        return (
            <nav style={{display:'flex', justifyContent: 'flex-end', alignItems:'center', gap: 10}}>
                <button onClick={handleSignIn}
                        className='br3 pa3 grey grow btn shadow-5'>Sign in
                </button>
                <button onClick={handleRegister}
                        className='br3 pa3 grey grow btn shadow-5'>Sign up
                </button>
            </nav>);
    }
}
export default Navigation;