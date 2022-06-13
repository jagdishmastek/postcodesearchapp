import { DASHBOARD_DRAWER_OPEN } from "./action-type";

/***
 * This function is use to call the reducers
 */

export const drawerOpenStatus = drawerOpen => {
  const type = DASHBOARD_DRAWER_OPEN;
  return { type, drawerOpen };
};

/***
 * This function is use to show/ hide display post code details on UI
 */

export const drawerOpenClick = drawerOpen => {
  return dispatch => {
    dispatch(drawerOpenStatus(drawerOpen));
  };
};