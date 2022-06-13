import {
    POSTCODES_SEARCH_REQUEST,
    POSTCODES_SEARCH_SUCCESS,
    POSTCODES_SEARCH_ERROR,
    POSTCODES_DETAILS_REQUEST,
    POSTCODES_DETAILS_SUCCESS,
    POSTCODES_DETAILS_ERROR
} from "../actions/action-type";

const initialState = {    
    postCodesData: [],
    loading: false,
    error: null,
    postCodeDetilas: {}
};

const postCodesReducers = (state = initialState, action) => {
    switch (action.type) {
        case POSTCODES_SEARCH_REQUEST:
          return {
            ...state,
            loading: true,
            error: null
          };
        case POSTCODES_SEARCH_SUCCESS:
          return {
            ...state,
            loading: false,
            postCodesData: action.data
          };
    
        case POSTCODES_SEARCH_ERROR:
          return {
            ...state,
            loading: false,          
            error: action.error,
            postCodesData:[]
          };    
        case POSTCODES_DETAILS_REQUEST:
            return {
              ...state,
              loading: true,
              error: null
            };
        case POSTCODES_DETAILS_SUCCESS:
            return {
              ...state,
              loading: false,
              postCodeDetilas: action.data
            };
      
        case POSTCODES_DETAILS_ERROR:
            return {
              ...state,
              loading: false,          
              error: action.error,
              postCodeDetilas: {}
            };   
        default:
          return state;
      }
    };
    
  export default postCodesReducers;

