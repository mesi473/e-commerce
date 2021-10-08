import {createStore,combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import Thunk from 'redux-thunk';
import {addItem,addCatagory,increaseCartNumber} from './Reducers';
 
const middleware=[Thunk];

const reducer=combineReducers({
    addItem,
    addCatagory,
    increaseCartNumber,
})

const store=createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)));

export default store;