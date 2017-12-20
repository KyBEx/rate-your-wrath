import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import store from "./redux"
import {Provider}from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import the index of redux (contains the store, rootreducer)


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>

    , document.getElementById("root"));
