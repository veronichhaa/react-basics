import React, {useContext, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Start from "./pages/Start";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import PostPage from "./pages/PostPage";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";

const AppRouter = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    return (
            <Routes>
                {
                    isAuth
                        ?
                        privateRoutes.map((route)=>
                                <Route
                                    key = {route.path}
                                    path={route.path}
                                    element={route.component}
                                    exact={route.exact}/>)
                        :
                        publicRoutes.map((route)=>
                                <Route
                                    key = {route.path}
                                    path={route.path}
                                    element={route.component}
                                    exact={route.exact}/>)
                }
            </Routes>
    );
};

export default AppRouter;