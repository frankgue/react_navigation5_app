import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import appReducer from "./reducers/appReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    users: appReducer
})

const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export default store