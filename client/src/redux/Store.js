import {createStore,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import {Login}  from './Reducers';
import Thunk from 'redux-thunk';

const midleware=[Thunk]
const Reducers=combineReducers({
    Login
})

export const Store=createStore(Reducers,composeWithDevTools(applyMiddleware(...midleware)))

