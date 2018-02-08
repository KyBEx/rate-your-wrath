import modal from "./modalReducer";
import data from "./dbReducer";
import userLogin from "./authorization";
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"

const rootReducer = combineReducers(
    {
        modal,
        data,
        userLogin
    }
)

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk));
