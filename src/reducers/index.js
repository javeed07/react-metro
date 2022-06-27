import { combineReducers } from 'redux'
import EmpReducer from "./EmpReducer";
import UsersReducer from "./UsersReducer";
import StudentsReducer from "./StudentsReducer";

var rootReducer = combineReducers({
    EmpReducer, UsersReducer,StudentsReducer
});
export default rootReducer;