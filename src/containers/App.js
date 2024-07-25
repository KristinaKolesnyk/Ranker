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
    const [user, setUser] = useState({}); // Update
    const navigate = useNavigate(); // Update

    const loadUser = (userData) =>{
        setUser(userData);
    }

    return (

        <div>
            <Routes>
                <Route exact path='/'
                       index element={<WelcomePage isSignedIn={isSignedIn} user={user}/>}/>
                <Route path='/creatlist' element={<CreatListPage  setCategoryData={setCategoryData}/>}/>
                <Route path='/signin' element={<SignIn loadUser={loadUser}/>}/>
                <Route path='/signup' element={<SignUp loadUser={loadUser}/>}/>
                <Route path='/yourlist' element={<YourListPage categoryData={categoryData}/>}/>
                <Route path='/addtolist' element={<AddToListPage categoryData={categoryData} setCategoryData={setCategoryData}/>}/>
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