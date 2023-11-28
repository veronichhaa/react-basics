import {Route} from "react-router-dom";
import Start from "../components/pages/Start";
import Posts from "../components/pages/Posts";
import PostPage from "../components/pages/PostPage";
import Error from "../components/pages/Error";
import React from "react";
import LoginPage from "../components/pages/LoginPage";

export const privateRoutes = [
    {path: '/', component: <Start/>, exact: true},
    {path: '/posts', component: <Posts/>, exact: true},
    {path: '/posts/:id', component: <PostPage/>, exact: true},
    {path: '*', component: <Error/>, exact: true},
]

export const publicRoutes = [
    {path: '/login', component: <LoginPage/>, exact: true},
    {path: '*', component: <LoginPage/>, exact: true},
]