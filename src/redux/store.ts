import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { todoReducer } from "./TodoReducer/todoReducer";
import { initialStatetype } from "../type";
// import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk"

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type rootReducerType = {
    todolist: initialStatetype
}

const rootReducer = combineReducers({
    todolist: todoReducer
})


export const store = legacy_createStore(rootReducer,
    // composeWithDevTools(
    composeEnhancers(
        applyMiddleware(thunk)
    )
    // )
)
