import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Autocomplete.css";
import { getPostCodesData, getPostCodesDetailsData, drawerOpenClick } from "../../store/actions";


const Autocomplete = () => {    
    const dispatch = useDispatch();
    const [activeSuggestion, setActiveSuggestion] = useState(0);
    const [filteredSuggestions, setFlteredSuggestions] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const [userInput, setUserInput] = useState("");

    const { postCodesData} = useSelector((state) => ({      
      postCodesData: state.postCodes.postCodesData
      
    }));

    
    useEffect(() => {
     
      if(postCodesData){
        
        setSuggestions(postCodesData);
        setFlteredSuggestions(postCodesData);
      }
    }, [postCodesData]);
   

   const onChange = e => {    
    const userInput = e.currentTarget.value.trim();
    if(userInput !== ""){
       dispatch(getPostCodesData(userInput))  
        setActiveSuggestion(0);
        dispatch(drawerOpenClick(false))
        setShowSuggestions(true);
        
    }
    setUserInput(e.currentTarget.value);
};

const onClick = e => {
    setActiveSuggestion(0);
    setFlteredSuggestions([]);
    setShowSuggestions(false);    
    dispatch(drawerOpenClick(true))
    dispatch(getPostCodesDetailsData(e.currentTarget.innerText));
    setUserInput(e.currentTarget.innerText);    
};


let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length && suggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li className={className} key={suggestion} data-testid={`suggestion-active-${index}`} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }

   
   return (
    <Fragment>  
    <input
    type="text"
    onChange={onChange}    
    value={userInput}
    placeholder="Enter postcode here..."
    />
    {suggestionsListComponent}
</Fragment>
   );

}



  export default Autocomplete;