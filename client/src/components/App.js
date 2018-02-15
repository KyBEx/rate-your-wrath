import React from "react";
import Home from "./homepage/HomeContainer";
import Blog from "./blogPage/BlogContainer";
import Login from "./login page/Login";
import ModalSwitch from "./modals/ModalSwitch";
import Signup from "./signupPage/Signup"
import "../style.css";
import { Switch, Route} from "react-router-dom";


export default function App(props){

    return (
        <main id="app-main">
        <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/login" component = {Login}/>
            <Route exact path = "/blog" component = {Blog}/>
            <Route exact path = "/signup" component = {Signup}/>
        </Switch>
        <ModalSwitch/>
        </main>
    )
}
