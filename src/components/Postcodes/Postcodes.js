import React from 'react'
import AddInput from '../AddInput/AddInput'
import Header from '../Header/Header'
import PostcodesDetails from '../PostcodesDetails/PostcodesDetails';
import "./Postcodes.css"

/**
* This component use to show post code input & details page on UI
* 
*/

const Postcodes = () =>{
    return (
        <div className="todo">
            <Header title="Postcode Search" />
            <AddInput />
            <PostcodesDetails/>
        </div>
    )
}

export default Postcodes;