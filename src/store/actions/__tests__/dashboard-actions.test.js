import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

import { drawerOpenClick, drawerOpenStatus } from "../dashboard-actions";

import { DASHBOARD_DRAWER_OPEN} from "../action-type";

// Create axios mock
const axiosMock = new MockAdapter(axios);

// Mock store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("dashboard action", () => {
    afterEach(() => {
      axiosMock.reset();
    });

    it("should fire DASHBOARD_DRAWER_OPEN in case of click true", async () => {
        const yourInitialState = {};
        const store = mockStore({ yourInitialState });
        expect(store.dispatch(drawerOpenStatus(true))).toEqual({
            type:DASHBOARD_DRAWER_OPEN,
            drawerOpen:true
        });
        
    });  

    it("should fire DASHBOARD_DRAWER_OPEN in case of click false", async () => {
        const yourInitialState = {};
        const store = mockStore({ yourInitialState });
        const expectedActions = [
            {
                type:DASHBOARD_DRAWER_OPEN,
                drawerOpen:false
            }
        ];
        store.dispatch(drawerOpenClick(false))
        expect(store.getActions()).toEqual(expectedActions);
        
    });  

});
    