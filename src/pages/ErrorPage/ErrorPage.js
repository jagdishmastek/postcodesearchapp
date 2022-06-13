import React from 'react'
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Header from "../../components/Header/Header";
import "./ErrorPage.css";



export default function ErrorPage() {
    let title =  "Something went wrong";
    let contentText = "Something went wrong" 
    let pageImage = faTriangleExclamation; 
    return (
        <div>
            <Container>
            <div className='page-content'>
            <Header title={title} />
            <div className="pagecontent-container">
                
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className='pagecontent-div'> 
                            <div>
                                <h2>{contentText}</h2>
                            </div>
                            <div>
                                <FontAwesomeIcon icon={pageImage} 
                                style={{ color: 'grey', height:'200px' }}/>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="pagecontent-footer">
                    <Link to="/">Go Back</Link>
                </div>
            </div>
            
        </div>
            </Container>
        </div>
    )
}