import React from "react";
import { useOutletContext } from "react-router-dom";


export default function HostVanPhotos(){

    const {vansData} = useOutletContext()

    return (
        <div className="vans-details-info">
            <img src={vansData.imageUrl} alt=""  width="150"/>
        </div>
    )
}