import modal from "./modalReducer";
import {createStore, combineReducers} from "redux";

const rootReducer = combineReducers(
    {
        modal
    }
)

export default createStore(rootReducer);
