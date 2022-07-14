import { combineReducers } from "redux";
import BalanceReducer from "./BalanceReducer";

const reducers = combineReducers({
    amount: BalanceReducer
}); // bahot saare actions ko ek saath return krta hai

export default reducers;

