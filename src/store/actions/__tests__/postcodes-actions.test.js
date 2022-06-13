import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { cleanup } from '@testing-library/react'
import { getPostCodesData, getPostCodesDetailsData } from "../postcodes-actions";
import { 
    POSTCODES_SEARCH_REQUEST,
    POSTCODES_SEARCH_SUCCESS,
    POSTCODES_SEARCH_ERROR,
    POSTCODES_DETAILS_REQUEST,
    POSTCODES_DETAILS_SUCCESS,
    POSTCODES_DETAILS_ERROR
} from "../action-type";

// Create axios mock
jest.mock("axios");
const axiosMock = new MockAdapter(axios);

// Mock store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("postcode action", () => {
    afterEach(cleanup)    

    it("should fire POSTCODES_SEARCH_REQUEST and POSTCODES_SEARCH_SUCCESS in case of success", async () => {
        
    
        // Mock the request sent to "/postcodes" endpoint
        // Return 200 with mocked data        
    
        const expectedActions = [
            {
              type: POSTCODES_SEARCH_REQUEST,
            },
            {
              type:POSTCODES_SEARCH_SUCCESS,
              data:data.result
            }
          ];

          axios.get.mockResolvedValueOnce({
            status: 200,
            data: data,
          });
        
    
        const yourInitialState = {
            postCodesData: [],
            loading: false,
            error: null,
            postCodeDetilas: {}
        };
        const store = mockStore({yourInitialState});
        
        store.dispatch(getPostCodesData());
        await new Promise((r) => setTimeout(r, 1000));        
        expect(store.getActions()).toEqual(expectedActions);
    });

    it("should fire POSTCODES_SEARCH_REQUEST and POSTCODES_SEARCH_ERROR in case of error", async () => {
        
    
        // Mock the request sent to "/postcodes" endpoint
        // Return 200 with mocked data        
    
        const expectedActions = [
            {
              type: POSTCODES_SEARCH_REQUEST,
            },
            {
              type:POSTCODES_SEARCH_ERROR,
              error:""
            }
          ];

          axios.get.mockResolvedValueOnce({
            status: 500,
            response: {
            error: new Error("Error: Request failed with status code 500"),
            }
          });
        
    
        const yourInitialState = {
            postCodesData: [],
            loading: false,
            error: null,
            postCodeDetilas: {}
        };
        const store = mockStore({yourInitialState});
        
        store.dispatch(getPostCodesData());
        await new Promise((r) => setTimeout(r, 1000));
        console.log(store.getActions())
        expect(store.getActions()).toEqual(expectedActions);
    });

    it("should fire POSTCODES_DETAILS_REQUEST and POSTCODES_DETAILS_SUCCESS in case of success", async () => {
        
    
        // Mock the request sent to "/postcodes" endpoint
        // Return 200 with mocked data        
    
        const expectedActions = [
            {
              type: POSTCODES_DETAILS_REQUEST,
            },
            {
              type:POSTCODES_DETAILS_SUCCESS,
              data:dataDetails.result
            }
          ];

          axios.get.mockResolvedValueOnce({
            status: 200,
            data: dataDetails,
          });
        
    
        const yourInitialState = {
            postCodesData: [],
            loading: false,
            error: null,
            postCodeDetilas: {}
        };
        const store = mockStore({yourInitialState});
        
        store.dispatch(getPostCodesDetailsData());
        await new Promise((r) => setTimeout(r, 1000));        
        expect(store.getActions()).toEqual(expectedActions);
    });

    it("should fire POSTCODES_DETAILS_REQUEST and POSTCODES_DETAILS_ERROR in case of error", async () => {
        
    
        // Mock the request sent to "/postcodes" endpoint
        // Return 200 with mocked data        
    
        const expectedActions = [
            {
              type: POSTCODES_DETAILS_REQUEST,
            },
            {
              type:POSTCODES_DETAILS_ERROR,
              error:""
            }
          ];

          axios.get.mockResolvedValueOnce({
            status: 500,
            response: {
            error: new Error("Error: Request failed with status code 500"),
            }
          });
        
    
        const yourInitialState = {
            postCodesData: [],
            loading: false,
            error: null,
            postCodeDetilas: {}
        };
        const store = mockStore({yourInitialState});
        
        store.dispatch(getPostCodesDetailsData());
        await new Promise((r) => setTimeout(r, 1000));
        console.log(store.getActions())
        expect(store.getActions()).toEqual(expectedActions);
    });

});

const dataDetails = {
    "status": 200,
    "result": {
       "postcode": "L10 0AJ",
       "quality": 1,
       "eastings": 339435,
       "northings": 397338,
       "country": "England",
       "nhs_ha": "North West",
       "longitude": -2.913844,
       "latitude": 53.469278,
       "european_electoral_region": "North West",
       "primary_care_trust": "Knowsley",
       "region": "North West",
       "lsoa": "Knowsley 004D",
       "msoa": "Knowsley 004",
       "incode": "0AJ",
       "outcode": "L10",
       "parliamentary_constituency": "Knowsley",
       "admin_district": "Knowsley",
       "parish": "Knowsley, unparished area",
       "admin_county": null,
       "admin_ward": "Cherryfield",
       "ced": null,
       "ccg": "NHS Knowsley",
       "nuts": "East Merseyside",
       "codes": {
          "admin_district": "E08000011",
          "admin_county": "E99999999",
          "admin_ward": "E05010935",
          "parish": "E43000243",
          "parliamentary_constituency": "E14000775",
          "ccg": "E38000091",
          "ccg_id": "01J",
          "ced": "E99999999",
          "nuts": "TLD71",
          "lsoa": "E01006508",
          "msoa": "E02001330",
          "lau2": "E08000011"
       }
    }
 }

const data = {
    "status": 200,
    "result": [
       "LS1 1AZ",
       "LS1 1BA",
       "LS1 1BL",
       "LS1 1DN",
       "LS1 1HE",
       "LS1 1HQ",
       "LS1 1HT",
       "LS1 1JF",
       "LS1 1LD",
       "LS1 1NS",
       "LS1 1NX",
       "LS1 1NZ",
       "LS1 1PH",
       "LS1 1PJ",
       "LS1 1UR",
       "LS1 1WU",
       "LS1 1ZB",
       "LS1 2AD",
       "LS1 2AF",
       "LS1 2AJ",
       "LS1 2AL",
       "LS1 2AX",
       "LS1 2AY",
       "LS1 2BA",
       "LS1 2BH",
       "LS1 2BL",
       "LS1 2DE",
       "LS1 2DR",
       "LS1 2DS",
       "LS1 2DZ",
       "LS1 2ED",
       "LS1 2EE",
       "LS1 2EF",
       "LS1 2EQ",
       "LS1 2ES",
       "LS1 2EU",
       "LS1 2EX",
       "LS1 2EY",
       "LS1 2FA",
       "LS1 2FH",
       "LS1 2FJ",
       "LS1 2FL",
       "LS1 2HA",
       "LS1 2HD",
       "LS1 2HH",
       "LS1 2HJ",
       "LS1 2HL",
       "LS1 2HQ",
       "LS1 2HT",
       "LS1 2JG",
       "LS1 2JJ",
       "LS1 2JP",
       "LS1 2JS",
       "LS1 2JT",
       "LS1 2JY",
       "LS1 2JZ",
       "LS1 2LE",
       "LS1 2LF",
       "LS1 2LH",
       "LS1 2LT",
       "LS1 2LW",
       "LS1 2ND",
       "LS1 2NE",
       "LS1 2NG",
       "LS1 2NL",
       "LS1 2NP",
       "LS1 2NU",
       "LS1 2NY",
       "LS1 2PF",
       "LS1 2PL",
       "LS1 2PQ",
       "LS1 2PW",
       "LS1 2PX",
       "LS1 2QB",
       "LS1 2QH",
       "LS1 2QS",
       "LS1 2RA",
       "LS1 2RD",
       "LS1 2RG",
       "LS1 2RL",
       "LS1 2RP",
       "LS1 2RU",
       "LS1 2RX",
       "LS1 2RY",
       "LS1 2SJ",
       "LS1 2SL",
       "LS1 2SP",
       "LS1 2SX",
       "LS1 2SZ",
       "LS1 2TE",
       "LS1 2TW",
       "LS1 2UA",
       "LS1 2UT",
       "LS1 3AA",
       "LS1 3AB",
       "LS1 3AD",
       "LS1 3AF",
       "LS1 3AH",
       "LS1 3AJ",
       "LS1 3AL"
    ]
 }