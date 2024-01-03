import React from "react";
import { useOutletContext } from "react-router-dom";


export default function HostVanPrice(){
    const { vansData} = useOutletContext()
    return (
        <div>
            {vansData.price}
        </div>
    )
}