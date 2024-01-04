import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo(){
    const {vansData} = useOutletContext();
    
    return(
        <div className="vans-details-info">
            Name: {vansData.name}<br/>

            Category: {vansData.type}<br/>

            Description: {vansData.description}
        </div>
    )
}