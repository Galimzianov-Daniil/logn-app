import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { News } from './pages/News';
import { NavbarState } from "./context/Navbar/NavbarState";


function App() {

    return (
        <NavbarState>
            <BrowserRouter>

                <div className="content-wrap">

                    <header className="header">
                        <Navbar />
                    </header>

                    <div className="content-wrap__main">
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/login" exact component={Login} />
                            <Route path="/profile" exact component={Profile} />
                            <Route path="/news" exact component={News} />
                        </Switch>
                    </div>

                    <header className="footer">
                        <Navbar />
                    </header>

                </div>

            </BrowserRouter>
        </NavbarState>
    )
}

export default App;
