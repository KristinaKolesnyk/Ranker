import React, {useState} from 'react';
import ParticlesBg from 'particles-bg';
import {useNavigate} from "react-router-dom";
import HomeButton from "../../components/Navigation/HomeButton";
import "./SignIn.css"
import Swal from "sweetalert2";

let config = {
    number: {
        value: 30,
        density: {
            enable: true,
            value_area: 800
        }
    }
};

const SignIn = ({loadUser}) => {
    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    let navigate = useNavigate();

    const onEmailChange = (event) => {
        setSignInEmail(event.target.value);
    }
    const onPasswordChange = (event) => {
        setSignInPassword(event.target.value);
    }

    const onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: signInEmail, password: signInPassword})
        }).then(response => response.json())
            .then(user => {
                if (user.id) {
                    loadUser(user);
                    navigate('/');
                } else {
                    Swal.fire({
                        icon: "error",
                        title: 'Sign In Failed',
                        text: "Please check your credentials and try again."
                    })
                }
            })
    }

    const handleClickRegister = () => {
        navigate('/signup');
    }

    return (
        <div>
            <ParticlesBg type="cobweb" config={config} bg={true}/>
            <div className='home-button'>
                <HomeButton/>
            </div>
            <div className="space-container">
                <article
                    className="tc br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center "
                    style={{backgroundColor: '#FEF5E7D8'}}>
                    <main className="pa4 black-80 ">
                        <div className="measure">
                            <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
                                <legend className="f1 fw6 ph0 mh0">SIGN IN</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                    <input onChange={onEmailChange}
                                           className="pa2 input-reset ba bg-transparent hover-bg-black-30 hover-white w-100"
                                           type="email" name="email-address" id="email-address"/>
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input onChange={onPasswordChange}
                                           className="b pa2 input-reset ba bg-transparent hover-bg-black-30 hover-white w-100"
                                           type="password" name="password" id="password"/>
                                </div>
                            </fieldset>
                            <div className="">
                                <input onClick={onSubmitSignIn}
                                       className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                       type="submit" value="Sign in"/>
                            </div>
                            <div className="lh-copy mt3">
                                <p onClick={handleClickRegister} href="#0" className="f6 link dim black db pointer">Sign
                                    up</p>
                            </div>
                        </div>
                    </main>
                </article>
            </div>
        </div>

    );
}

export default SignIn;