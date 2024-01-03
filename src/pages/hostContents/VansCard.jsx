import React from "react";
import { Link } from "react-router-dom";

export default function VansCard(props){

    return (
        <Link to={props.data.id}  className="vans--card">
            <img src={props.data.imageUrl} alt="Vans_Img" width="150px" className="vans--card-img"/>
            <div className="vans--card--contet">
                <div>{props.data.name}</div>
                <div>{props.data.price}/day</div>
            </div>
        </Link>
    )
}