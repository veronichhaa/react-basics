import React, {useContext} from 'react';
import cl from './NavBar.module.css'
import {Link} from "react-router-dom";
import Start from "../../pages/Start";
import Posts from "../../pages/Posts";
import MyButton from "../button/myButton";
import {AuthContext} from "../../../context";

const NavBar = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);
    function logout(){
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <nav className={cl.nav}>
            <Link className={cl.nav__link} to="/">ABOUT</Link>
            <Link className={cl.nav__link} to="/posts">POSTS</Link>
            <Link className={cl.nav__link} onClick={logout}>LOGOUT</Link>
        </nav>
    );
};

export default NavBar;