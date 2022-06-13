import React, {useEffect, useState} from "react"
import { Map, Marker } from "pigeon-maps";

/**
 * This component use to display Map on UI
 * 
 */


const MapDiv = (prors) =>{
    //setting the local state
    const [newCenter, setNewCenter] = useState([]);
    const [zoom, setzoom] = useState(12);
    
    // setting the local state from prors
    useEffect(()=>{
        setNewCenter(prors.center);
        setzoom(15);
    },[prors.center])
    return(
        <>
        <Map center={newCenter}
             defaultCenter={[51.509865, -0.118092]}
             zoom={zoom}
             width={500}
             height={250}>
            <Marker  defaultWidth={50} anchor={newCenter}  />
        </Map>
        </>
    )

};

export default MapDiv;