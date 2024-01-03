import React from "react";
import { Outlet, useParams, NavLink } from "react-router-dom";
import data from "../../assets/data.js"

export default function HostVansDetails(){
    const {id} = useParams();

    const [vanD] = data.filter((ele)=>{
        if(ele.id === id){
            return true
        }
    })
    const [vansData, setVansData] = React.useState(vanD);

    return (
        <div className="van-details">
            <NavLink to=".." relative="path" style={{textDecoration:"underline"}}>Back to all Vans</NavLink>
            <img src={vansData.imageUrl} alt="vans detail imge" width="250px"/>
            <div className="van-details-aside">
                <h1>{vansData.name}</h1>
                <div>{vansData.price}</div>
            </div>
            <div className="van-details-content">
                <div className="buttons">
                    <NavLink to=".">Details</NavLink>
                    <NavLink to="price">Pricing</NavLink>
                    <NavLink to="photos">Photos</NavLink>
                </div>
                <Outlet context={{vansData}} />
            </div>
            
        </div>
    )

}