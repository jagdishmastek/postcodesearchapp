import {
    POSTCODES_SEARCH_REQUEST,
    POSTCODES_SEARCH_SUCCESS,
    POSTCODES_SEARCH_ERROR,
    POSTCODES_DETAILS_REQUEST,
    POSTCODES_DETAILS_SUCCESS,
    POSTCODES_DETAILS_ERROR
} from "../../actions/action-type";

import postCodesReducers from "../postCodes-reducer";

const initialState = {    
    postCodesData: [],
    loading: false,
    error: null,
    postCodeDetilas: {}
};
let state = {}

describe("PostCodes reducer tests", () => {
    it("should handle POSTCODES_SEARCH_REQUEST", () => {
        expect(
          postCodesReducers((state = initialState), {
            type: POSTCODES_SEARCH_REQUEST,
          })
        ).toEqual({
            postCodesData: [],
            loading: true,
            error: null,
            postCodeDetilas: {}
        });
      });

      it("should handle POSTCODES_SEARCH_SUCCESS", () => {
        const storeOutput = postCodesReducers(initialState, {
            type: POSTCODES_SEARCH_SUCCESS,
            data: [
                "LS1 1AZ",
                "LS1 1BA",
                "LS1 1BL",
                "LS1 1DN"
            ]
          });
        
          expect(storeOutput).toEqual(
             {
                "error": null, 
                "loading": false, 
                "postCodeDetilas": {}, 
                "postCodesData": [
                    "LS1 1AZ",
                    "LS1 1BA",
                    "LS1 1BL",
                    "LS1 1DN"
                ]
            }
            );
      });

      it("should handle POSTCODES_SEARCH_ERROR", () => {
        const storeOutput = postCodesReducers(initialState, {
            type: POSTCODES_SEARCH_ERROR,
            error: 'error'
          });
        
          expect(storeOutput).toEqual(
             {
                "error": 'error', 
                "loading": false, 
                "postCodeDetilas": {}, 
                "postCodesData": []
            }
            );
      });

      it("should handle POSTCODES_DETAILS_REQUEST", () => {
        expect(
          postCodesReducers((state = initialState), {
            type: POSTCODES_DETAILS_REQUEST,
          })
        ).toEqual({
            postCodesData: [],
            loading: true,
            error: null,
            postCodeDetilas: {}
        });
      });

      it("should handle POSTCODES_DETAILS_SUCCESS", () => {
        const storeOutput = postCodesReducers(initialState, {
            type: POSTCODES_DETAILS_SUCCESS,
            data: { "postcode": "L10 0AJ",
            "quality": 1,
            "eastings": 339435,
            "northings": 397338,
            "country": "England"}
          });
        
          expect(storeOutput).toEqual(
             {
                "error": null, 
                "loading": false, 
                "postCodeDetilas": {
                    "postcode": "L10 0AJ",
                    "quality": 1,
                    "eastings": 339435,
                    "northings": 397338,
                    "country": "England"
                }, 
                "postCodesData": []
            }
            );
      });

      it("should handle POSTCODES_DETAILS_ERROR", () => {
        const storeOutput = postCodesReducers(initialState, {
            type: POSTCODES_DETAILS_ERROR,
            error: 'error'
          });
        
          expect(storeOutput).toEqual(
             {
                "error": 'error', 
                "loading": false, 
                "postCodeDetilas": {}, 
                "postCodesData": []
            }
            );
      });


})