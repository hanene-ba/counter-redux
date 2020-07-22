import {combineReducers} from "redux"; 
import counter from './counterReducer'; 
import Login from "./reducerLogin"; 

const allReducers = combineReducers({
    count: counter , 
    loggedIn : Login
}); 

export default allReducers; 