import React, {useState} from 'react';
import ParticlesBg from 'particles-bg';
import {useNavigate} from "react-router-dom";
import "../SignIn/SignIn.css"

let config = {
    number: {
        value: 30,
        density: {
            enable: true,
            value_area: 800
        }
    }
};

const SignUp = ({loadUser}) => {
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUnPassword] = useState('');
    const [signUpName, setSignUpName] = useState('');
    let navigate = useNavigate();

    const onNameChange = (event) => {
        setSignUpName(event.target.value);
    }

    const onEmailChange = (event) => {
        setSignUpEmail(event.target.value);
    }
    const onPasswordChange = (event) => {
        setSignUnPassword(event.target.value);
    }

    const onSubmitSignUp = () => {
        fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: signUpName,email: signUpEmail, password: signUpPassword})
        }).then(response => response.json())
            .then(user => {
                if (user.id) {
                    loadUser(user);
                    navigate('/');
                } else {
                    alert('Incorrect credentials');
                }
            })
    }

    return (
        <div>
            <ParticlesBg className="config" type="cobweb" config={config} bg={true}/>
            <article className="tc br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" style={{backgroundColor: '#FEF5E7D8'}}>
                <main className="pa4 black-80">
                    <div className="measure ">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign Up</legend>

                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor='name'>Name</label>
                                <input onChange={onNameChange}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black-30 hover-white w-100"
                                    type='name' name="name" id="name"/>
                            </div>
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
                            <input onClick={onSubmitSignUp}
                                   className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                   type="submit" value="Save"/>
                        </div>
                    </div>
                </main>
            </article>
        </div>
    );
}

export default SignUp;