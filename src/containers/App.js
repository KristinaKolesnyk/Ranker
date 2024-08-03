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
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [categoryData, setCategoryData] = useState({});
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const loadUser = (userData) =>{
        setUser(userData);
        setIsSignedIn(true);
    }
    const signOut = () => {
        setUser({});
        setIsSignedIn(false);
        navigate('/');
    }

    return (
        <div>
            <Routes>
                <Route exact path='/'
                       index element={<WelcomePage isSignedIn={isSignedIn} user={user} signOut={signOut} categoryData={categoryData}/>}/>
                <Route path='/creatlist' element={<CreatListPage  setCategoryData={setCategoryData} user={user}/>}/>
                <Route path='/signin' element={<SignIn loadUser={loadUser}/>}/>
                <Route path='/signup' element={<SignUp loadUser={loadUser}/>}/>
                <Route path='/yourlist' element={<YourListPage categoryData={categoryData} user={user}/>}/>
                <Route path='/addtolist' element={<AddToListPage categoryData={categoryData} setCategoryData={setCategoryData} user={user}/>}/>
                <Route path='/bracketpage' element={<BracketPage categoryData={categoryData}/>}/>
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