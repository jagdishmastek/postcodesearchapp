import React, {useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const CheckRequests= Wrapped => {
    
    function CheckRequests(props) {
        
        const navigate = useNavigate();
        useEffect(()=>{
            axios.interceptors.response.use(function (response) {
                return response;
            }, function (error) {
                console.log(error);                        
                        switch (error.response.status) {
                            case 400 :
                                navigate('/error-page');
                                break
                            case 401 :           
                                 navigate('/error-page');
                            break
                            case 404 :
                                navigate('/error-page');
                            break
                            case 500 :
                                navigate('/error-page');
                            break
                            case 503 :
                                navigate('/error-page');
                                break
                            default :                            
                                break
                        }
                
                // Do something with response error
                return Promise.reject(error);
            });
        })

        return (
            <Wrapped {...props} />
        )
    }
    return CheckRequests
}

export default CheckRequests