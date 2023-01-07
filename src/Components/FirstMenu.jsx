import React from 'react'
import "../CSS/FirstMenu.css";
import Cards from "../Components/Cards";


const FirstMenu = () => {
  return (
    <div className='parentFirstMenu'>
        <div className='firstMenuHeading'>
          <h2>Contact Names</h2>
        </div>
      <div className='firstMenuContainer'>
        <Cards/>
      </div>
    </div>
    
  )
}

export default FirstMenu