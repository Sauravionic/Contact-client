import React from 'react';
import "../CSS/Header.css";
import Profile from "../Images/Photo1.jpg";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
        <div className='heading flex'>
            <Link to = "/" className='headingLink'><h3>Contacts</h3></Link>
        </div> 
        <div className='searchBar'>
            <BiSearchAlt className='searchIcon'/>      
            <input type = "text" placeholder='Search Contacts or Names'/>      
          </div>
        <div className='profileImgContainer'>
            <div className='profileImg'>
                <img src={ Profile } alt = "profile" />      
            </div>      
        </div>
    </div>
  )
}

export default Header