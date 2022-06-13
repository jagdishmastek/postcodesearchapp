import React from 'react'
import { Container } from "react-bootstrap"
import Postcodes from "../../components/Postcodes/Postcodes"

/**
* This component use to show post code page on UI
* 
*/

 const  PostcodesPage = () => {
    return (
        <div>
            <Container>
                <Postcodes />
            </Container>
        </div>
    )
}

export default PostcodesPage;