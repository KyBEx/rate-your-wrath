import React from "react";
import Home from "./homepage/HomeContainer";
import Blog from "./blogPage/BlogContainer";
import ModalSwitch from "./modals/ModalSwitch";
import Navigation from "./navigation/Navbar";
import "./appStyle.css";
import { Switch, Route} from "react-router-dom";


export default function App(props){

    return (
        <main id="app-main">
        <Navigation/>
        <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route path = "/blog" component = {Blog}/>
        </Switch>
        <ModalSwitch/>
        </main>
    )
}
