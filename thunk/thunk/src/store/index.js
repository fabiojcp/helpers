// adicionamos o applyMiddleweare do próprio redux
import { createStore, combineReducers, applyMiddleware } from "redux";

// também adicionamos o thunk 
import thunk from "redux-thunk";

import userReducer from "./modules/user/reducer";

const reducers = combineReducers({ user: userReducer });

// além do reducers, colocamos o applyMiddleware passando o thunk
export const store = createStore(reducers, applyMiddleware(thunk));

