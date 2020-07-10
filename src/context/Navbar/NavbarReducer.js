import { CHECK_LOGIN_LINK } from "../types";

const handlers = {
    [CHECK_LOGIN_LINK]: state => ({ ...state, isUnloginLinkExist: localStorage.isLogged }),
    DEFUALT: state => state
}

export const NavbarReducer = (state, action) => {

    const handle = handlers[action.type] || handlers.DEFUALT;

    return handle(action, state);

}