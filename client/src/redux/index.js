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

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk));
