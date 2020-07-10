import React, { useState, useContext } from "react";
import { NavbarContext } from "../../context/Navbar/NavbarContext";

import {Redirect} from "react-router-dom";

export const LoginFrom = ({ setLogged }) => {
    const [inputData, setInputData] = useState({ login: "", password: "" });
    const { checkLoginLink } = useContext(NavbarContext);

    const submitHandler = event => {
        event.preventDefault();
        
        if (inputData.login === "Admin" && inputData.password === "12345") {
            localStorage.isLogged = true;
            checkLoginLink();
        } else {
            alert("Имя пользователя или пароль введены не верно");
        }

    }   

    if (localStorage.isLogged === "true") {
        return <Redirect to={"/profile"} />
    }

    return (
        <form onSubmit={submitHandler}>

            <input
                type="text"
                className="form-control"
                placeholder="Введите логин"
                onChange={e => setInputData({ ...inputData, login: e.target.value })}
            />

            <input
                type="text"
                className="form-control"
                placeholder="Введите пароль"
                onChange={e => setInputData({ ...inputData, password: e.target.value })}
            />

            <button>Отправить</button>

        </form>
    )

}