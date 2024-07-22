import React from 'react';
import ParticlesBg from 'particles-bg';
import {useNavigate} from "react-router-dom";
import "./SignIn.css"

let config = {
    number: {
        value: 30,
        density: {
            enable: true,
            value_area: 800
        }}};

const SignIn = ({onRouteChange}) => {
    let navigate = useNavigate();
    const handleClickHome = () => {
        navigate('/');
    }
    const handleClickRegister = () => {
        navigate('/signup');
    }

    return (
        <div>
            <ParticlesBg type="cobweb" config={config} bg={true}/>
            <article className="tc br3 box-color ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure ">
                        <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black-30 hover-white w-100"
                                    type="email" name="email-address" id="email-address"/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black-30 hover-white w-100"
                                    type="password" name="password" id="password"/>
                            </div>
                        </fieldset>
                        <div className="">
                            <input onClick={handleClickHome}
                                   className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                   type="submit" value="Sign in"/>
                        </div>
                        <div className="lh-copy mt3">
                        <p onClick={handleClickRegister} href="#0" className="f6 link dim black db pointer">Sign up</p>
                            <a href="#0" className="f6 link dim black db">Forgot your password?</a>
                        </div>
                    </div>
                </main>
            </article>
        </div>

    );
}

export default SignIn;