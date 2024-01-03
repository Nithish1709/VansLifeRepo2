import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo(){
    const {vansData} = useOutletContext();
    
    return(
        <div>
            Name: {vansData.name}

            Category: {vansData.type}

            Description: {vansData.description}
        </div>
    )
}