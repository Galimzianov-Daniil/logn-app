import React, { useReducer } from "react";
import { NavbarContext } from "./NavbarContext";
import { NavbarReducer } from "./NavbarReducer";
import { CHECK_LOGIN_LINK } from "../types";

export const NavbarState = ({ children }) => {

    const initialState = { isUnloginLinkExist: localStorage.isLogged === "true" };

    const [state, dispatch] = useReducer(NavbarReducer, initialState);

    const checkLoginLink = () => {
        dispatch({ type: CHECK_LOGIN_LINK });
    };

    return (
        <NavbarContext.Provider value={{
            checkLoginLink, isUnloginLinkExist: state.isUnloginLinkExist
        }}>
            {children}
        </NavbarContext.Provider>
    )

}