import React from 'react';
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import Header from "../../components/Header/Header";
import "./PageNotFoundPage.css";

const PageNotFoundPage = () => {
    let title = "Page Not Found";   
    let contentText = "The page you looking for dosen't exist.";
    let pageImage = faFaceFrown; 
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


export default PageNotFoundPage;