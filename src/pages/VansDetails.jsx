import React from "react"
import { useParams, NavLink, useLocation } from "react-router-dom"
import data from "../assets/data.js"
import Vans from "./Vans.jsx"


export default function VansDetails(){

    const {id} = useParams()
    const location = useLocation()
    

    const search = location.state.search ?  (location.state.search) : ""
    const type = location.state?.type || "all"
    const [vanElements] =  data.filter((ele)=>{
        if(ele.id === id){
            return true
        }
    })
    const linkstyle ={
        textDecoration :"underline",
        fontWeight:"bold"
    }

    const buttonStyle ={
        backgroundColor:"rgb(62, 62, 62)",
        color:"white",
        border:"none",
        borderRadius:"3px",
    }

    return (
        <div className="van-details">
            <NavLink to={`..${search}`} relative="path" style={linkstyle} className="back-btn">Back to {type} vans</NavLink>
            <div className="van-details-aside">
                <div className="image-container">
                    <img src={vanElements.imageUrl} alt="vans image" className="detail-img"/>
                </div>
                <div className="aside-content">
                    <h1>{vanElements.name}</h1>
                    <p>Price:{vanElements.price}/day</p>
                    <p className="type-btn">{vanElements.type}</p>
                </div>
                
            </div>
            <div className="van-details-content">
                <p>{vanElements.description}</p>
                <button style={buttonStyle}>Rent this van</button>
            </div>

        </div>
    )
}
