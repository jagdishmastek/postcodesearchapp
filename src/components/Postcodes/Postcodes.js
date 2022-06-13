import React, { useState } from 'react'
import AddInput from '../AddInput/AddInput'
import Header from '../Header/Header'
import PostcodesDetails from '../PostcodesDetails/PostcodesDetails';
import "./Postcodes.css"

function Postcodes() {

    const [todos, setTodos] = useState([])

    return (
        <div className="todo">
            <Header title="Postcode Search" />
            <AddInput 
                setTodos={setTodos}
                todos={todos}
            />
            <PostcodesDetails/>
        </div>
    )
}

export default Postcodes