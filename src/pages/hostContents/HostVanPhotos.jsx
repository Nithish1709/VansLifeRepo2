import React from "react";
import { useOutletContext } from "react-router-dom";


export default function HostVanPhotos(){

    const {vansData} = useOutletContext()

    return (
        <div>
            <img src={vansData.imageUrl} alt=""  width="250"/>
        </div>
    )
}