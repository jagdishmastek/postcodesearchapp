import dashboardReducers from "../dashboard-reducer";
import { DASHBOARD_DRAWER_OPEN} from "../../actions/action-type";

const initialState = {
    drawerOpen: false
  };
let state = {}
let action = {}

  describe("Dashboard reducer tests", () => {
    it("should handle DASHBOARD_DRAWER_OPEN", () => {
        expect(
        dashboardReducers((state = initialState), {
            type: DASHBOARD_DRAWER_OPEN,
          })
        ).toEqual({
            drawerOpen: action.drawerOpen
        });
      });
  });