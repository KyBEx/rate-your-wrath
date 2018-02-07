import React from "react";
import Home from "./homepage/HomeContainer";
import Blog from "./blogPage/BlogContainer";
import Login from "./login page/Login";
import ModalSwitch from "./modals/ModalSwitch";
import "../style.css";
import { Switch, Route} from "react-router-dom";


export default function App(props){

    return (
        <main id="app-main">
        <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/login" component = {Login}/>
            <Route path = "/blog" component = {Blog}/>
        </Switch>
        <ModalSwitch/>
        </main>
    )
}
