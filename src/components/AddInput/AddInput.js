import React from 'react'
import "./AddInput.css"
import Autocomplete from "../Autocomplete/Autocomplete";
import "../Autocomplete/Autocomplete.css"

/**
 * This component use to display input box on UI
 * 
 */


export const AddInput =() => {
    return (
        <div className="input-container">
            <Autocomplete/>
        </div>
    )
}

export default AddInput