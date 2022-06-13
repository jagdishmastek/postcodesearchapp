import {
    POSTCODES_SEARCH_REQUEST,
    POSTCODES_SEARCH_SUCCESS,
    POSTCODES_SEARCH_ERROR,
    POSTCODES_DETAILS_REQUEST,
    POSTCODES_DETAILS_SUCCESS,
    POSTCODES_DETAILS_ERROR

  } from "./action-type";
  import { ipfService } from "../services";
  
  export const getPostCodesData = (search) => {
    
    return (dispatch) => {
      dispatch(postCodesRequest());     
      let searchQuery = `''`;
      if(search !== "") {
        searchQuery = search;
      }
     
        let apiEndpoint = `postcodes/${searchQuery}/autocomplete?limit=10000`;
    
        ipfService
            .get(apiEndpoint)
            .then((response) => {           
                 dispatch(postCodesSuccess(response));
            
            })
            .catch((err) => {            
                dispatch(postCodesError(err));
            });
        
       
    };
  };

  export const postCodesRequest = () => {
    return {
      type: POSTCODES_SEARCH_REQUEST,
    };
  };
  
  export const postCodesSuccess = (results) => {
    return {
      type: POSTCODES_SEARCH_SUCCESS,
      data: results.data.result
    };
  };
  
  export const postCodesError = (error) => {
    return {
      type: POSTCODES_SEARCH_ERROR,  
      error: "",
    };
  };


  export const getPostCodesDetailsData = (postcode) => {
    
    return (dispatch) => {
      dispatch(postCodesDetailsRequest());     
      let searchQuery = `''`;
      if(postcode !== "") {
        searchQuery = postcode;
      }
     
        let apiEndpoint = `postcodes/${searchQuery}`;
    
        ipfService
            .get(apiEndpoint)
            .then((response) => {           
                dispatch(postCodesDetailsSuccess(response));
            })
            .catch((err) => {            
                dispatch(postCodesDetailsError(err));
            });
        
       
    };
  };

  export const postCodesDetailsRequest = () => {
    return {
      type: POSTCODES_DETAILS_REQUEST,
    };
  };
  
  export const postCodesDetailsSuccess = (results) => {
    return {
      type: POSTCODES_DETAILS_SUCCESS,
      data: results.data.result
    };
  };
  
  export const postCodesDetailsError = (error) => {
    return {
      type: POSTCODES_DETAILS_ERROR,  
      error: "",
    };
  };

