import React, {useContext, useState} from 'react';
import MyInput from "../UI/input/myInput";
import MyButton from "../UI/button/myButton";
import {AuthContext} from "../../context";

const LoginPage = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);

    function login(){
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
   }

    return (
            <div className="loginForm">
                <label>Login</label>
                <MyInput type="text"></MyInput>
                <label>Password</label>
                <MyInput type="password"></MyInput>
                <MyButton onClick={login}>LOGIN</MyButton>
                </div>

    );
};

export default LoginPage;