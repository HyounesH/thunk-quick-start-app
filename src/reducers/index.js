import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
export default combineReducers({
    //our reducers
    news: newsReducer
});