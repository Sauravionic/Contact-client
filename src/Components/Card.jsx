import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import "../CSS/Card.css";
import Photo1 from "../Images/Photo1.jpg";
import { RiMessage3Fill } from "react-icons/ri"


const Card = ({ data }) => {
  return (
    <div className='cardContainer' id = "cardContainer">
        <Link to={`/id/${data.id}`} className='cardLink'>
           <div className='secondContainer'>
              <div className='cardImg'>
                  <img src= { data.image } alt = "pic"></img>   
               </div>
               <h3>{ data.name } | <span> { data.category }</span></h3>
           </div>
           
           <div className='cardIcon'>
              <RiMessage3Fill/>
           </div>
        </Link>      
    </div>
  )
}

export default Card