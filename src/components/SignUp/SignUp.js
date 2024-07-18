import React from 'react';
import ParticlesBg from 'particles-bg';

let config = {
    number: {
        value: 30,
        density: {
            enable: true,
            value_area: 800
        }
    }
};

const SignUp = ({onRouteChange}) => {
    return (
        <div>
            <ParticlesBg className="config" type="cobweb" config={config} bg={true}/>
            <article className="tc br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure ">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign Up</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black-10 hover-white w-100"
                                    type="text" name="name" id="name"/>
                            </div> <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black-10 hover-white w-100"
                                    type="email" name="email-address" id="email-address"/>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black-10 hover-white w-100"
                                    type="password" name="password" id="password"/>
                            </div>
                        </fieldset>
                        <div className="">
                            <input onClick={() => onRouteChange('home')}
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