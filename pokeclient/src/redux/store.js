import { applyMiddleware, createStore } from "redux";
import {rootReducer} from "./reducers/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { previusPage } from "./actions/actions";



const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
))
store.dispatch(previusPage(0,20))
export default store