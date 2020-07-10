import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { NavbarContext } from "../../context/Navbar/NavbarContext";

import "./Navbar.scss";


export const Navbar = () => {

    const links = [
        { route: "/", text: "Главная" },
        { route: "/news", text: "Новости" },
        { route: "/profile", text: "Личный кабинет" }
    ]

    const { isUnloginLinkExist, checkLoginLink } = useContext(NavbarContext);

    useEffect(() => {
        checkLoginLink();
        // react-hooks/exhaustive-deps
    }, []);

    return (

        <div className="navbar">
            <div className="container">

                <nav className="nav">

                    {links.map(link => (

                        <div className="nav__item">
                            <NavLink
                                className="nav__link"
                                to={link.route}
                                exact
                                key={link.text}
                            > {link.text}
                            </NavLink>
                        </div>

                    ))}

                    {isUnloginLinkExist === "true" &&

                        <div className="nav__item">

                            <NavLink
                                to="/login"
                                exact
                                onClick={() => { localStorage.isLogged = false }}
                            >  Выйти

                        </NavLink>

                        </div>
                    }

                </nav>

            </div>

        </div>


    )

}