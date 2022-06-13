import React from 'react'
import "./AddInput.css"
import Autocomplete from "../Autocomplete/Autocomplete";
import "../Autocomplete/Autocomplete.css"

export const AddInput =() => {
    return (
        <div className="input-container">
            <Autocomplete/>
        </div>
    )
}

export default AddInput