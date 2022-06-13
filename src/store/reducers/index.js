import { combineReducers } from "redux";
import postCodesReducers from "./postCodes-reducer";
import dashboardReducer from "./dashboard-reducer";

export default combineReducers({
    postCodes: postCodesReducers,
    dashboard: dashboardReducer,
  });