import React from 'react';
import { Redirect } from 'react-router-dom';

export const Profile = () => {

    if (localStorage.isLogged === "true") {

        return (
            <div className="container">
                <h1>Личный кабинет</h1>
                {localStorage.isLogged}
            </div>
        )

    }   

    return <Redirect to={"/login"} />

}