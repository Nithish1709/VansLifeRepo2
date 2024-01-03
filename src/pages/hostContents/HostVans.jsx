import React from "react";
import VansCard from "./VansCard.jsx"
import data from "../../assets/data.js"


export default function HostVans(){

   const [vansData, setVansData] = React.useState(data);
   const cardElements = vansData.map((ele)=>{
    return (
        <VansCard data={ele} />)
   })


    return (
        <div className="vans-card-container">
           {cardElements}
        </div>
    )
}


