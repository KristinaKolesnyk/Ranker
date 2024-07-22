import React, {useState} from 'react';
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import CreatListPage from "../pages/CreatList/CreatListPage";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import WelcomePage from "../pages/Welcome/WelcomePage";
import YourListPage from "../pages/YourList/YourListPage";
import AddToListPage from "../pages/AddToListPage/AddToListPage";
import BracketPage from "../pages/BracketPage/BracketPage";


const App = () => {
    const [isSignedIn, setIsSignedIn] = useState(false); // Update
    const navigate = useNavigate(); // Update

    const onRouteChange = (route) => {
        if (navigate === '/') {
            setIsSignedIn(true);
        } else {
            setIsSignedIn(false);
        }
        navigate(route);
    }
    return (

        <div>
            <Routes>
                <Route exact path='/'
                       index element={<WelcomePage onRouteChange={onRouteChange} isSignedIn={isSignedIn}/>}/>
                <Route path='/creatlist' element={<CreatListPage onRouteChange={onRouteChange}/>}/>
                <Route path='/signin' element={<SignIn onRouteChange={onRouteChange}/>}/>
                <Route path='/signup' element={<SignUp onRouteChange={onRouteChange}/>}/>
                <Route path='/yourlist' element={<YourListPage />}/>
                <Route path='/addtolist' element={<AddToListPage />}/>
                <Route path='/bracketpage' element={<BracketPage />}/>
            </Routes>
        </div>
    );
}

const AppWrapper = () => {
    return (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    );
}

export default AppWrapper;