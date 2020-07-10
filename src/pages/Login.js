import React, { useContext, useEffect, useState } from 'react';
import { LoginFrom } from "../components/LoginForm/LoginForm";
import { NavbarContext } from "../context/Navbar/NavbarContext";

export const Login = () => {

    const { checkLoginLink } = useContext(NavbarContext);   

    useEffect(() => {
        checkLoginLink();    
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container">
            <h1>Авторизация</h1>
            <LoginFrom/>
        </div>
    )

}