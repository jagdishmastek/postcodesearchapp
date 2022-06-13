import React,{useEffect, useState, Suspense} from 'react'
import "./PostcodesDetails.css"
import { useSelector } from "react-redux";
import Collapse from 'react-bootstrap/Collapse';
import MapDiv from "../MapDiv/MapDiv";
import {getLocation} from "../../utils/Utils";



const PostcodesDetails = () => {   
    const [postCodeInfo, setpostCodeInfo] = useState({});   
    const [location, setLocation] = useState(""); 
    const { drawerOpenFlag, postCodeDetails, loading  } = useSelector((state) => ({
        drawerOpenFlag: state.dashboard.drawerOpen,       
        postCodeDetails: state.postCodes.postCodeDetilas,
        loading: state.postCodes.loading
      }));

    

    let divFlag = drawerOpenFlag;
   
    
    
    let center = [postCodeInfo.latitude, postCodeInfo.longitude]
    
    useEffect(()=>{
        if (postCodeDetails.latitude < 52.229466) {
            setLocation(getLocation.South);
          } else if (postCodeDetails.latitude >= 52.229466 && postCodeDetails.latitude < 53.27169) {
            setLocation(getLocation.Midlands);
          } else {
            setLocation(getLocation.North);
          }
        setpostCodeInfo(postCodeDetails)
    },[postCodeDetails])

    
    
    return (
       <>
       <Suspense fallback={loading && <h1>Loading content...</h1>}>
       
         {divFlag &&
         <Collapse in={divFlag}>
        <div className="todolist-container">            
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div className="postcode-container">
                    <div className="container ">       
                            <div className="row py-2">
                                <div className="col postcode-location">
                                    {location}
                                </div>
                            </div>                   
                            <div className="row font-weight-bold py-2">
                                <div className="col todo-item-active">
                                    Country
                                </div>
                                <div className="col todo-item-active">
                                    {postCodeInfo.country}
                                </div>
                                
                            </div>
                            <div className="row py-2">
                                <div className="col todo-item-active">
                                    Region
                                </div>
                                <div className="col todo-item-active">
                                    {postCodeInfo.region}
                                </div>
                               
                            </div>
                            <div className="row py-2">
                                <div className="col todo-item-active">
                                    Admin District
                                </div>
                                <div className="col todo-item-active">
                                    {postCodeInfo.admin_district}
                                </div>
                                
                            </div>
                            <div className="row py-2">
                                <div className="col todo-item-active">
                                    Parliamentary Constituency
                                </div>
                                <div className="col todo-item-active">
                                    {postCodeInfo.parliamentary_constituency}
                                </div>                               
                            </div>
                        </div>       
                    </div>
                </div>
                <div className="col-md-6 col-md-offset-3">
                
                    <div className="map-container">
                        <MapDiv center={center}/>
                    </div>
                
                </div>
            </div>
        </div>
        </Collapse>
        }
        </Suspense>
        </>
    )
}

export default PostcodesDetails