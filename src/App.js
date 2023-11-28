import React, {useContext, useEffect, useMemo, useState} from "react";
import './styles/App.css'
import {BrowserRouter, Link, Route, Router, Routes} from "react-router-dom";
import Start from "./components/pages/Start";
import Posts from "./components/pages/Posts";
import NavBar from "./components/UI/nav/NavBar";
import cl from "./components/UI/nav/NavBar.module.css";
import Error from "./components/pages/Error";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";
function App() {

    const [isAuth, setIsAuth] = useState(false);
    useEffect(()=>{
        const isAuthed = localStorage.getItem('auth')
        if(isAuthed==='true') setIsAuth(true);
    },[])

    return(
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            <div className="App">
                <BrowserRouter>
                    <NavBar/>
                    <AppRouter/>
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    );

};

export default App;
