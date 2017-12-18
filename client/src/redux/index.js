import modal from "./modalReducer";
import data from "./dbReducer";
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"

const rootReducer = combineReducers(
    {
        modal,
        data
    }
)

export default createStore(rootReducer, applyMiddleware(thunk));
