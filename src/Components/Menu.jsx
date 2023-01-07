import React from 'react'
import '../CSS/Menu.css'
import FirstMenu from './FirstMenu'
import SecondMenu from './SecondMenu'

const Menu = () => {
  return (
    <div className='menu'>
        <div className='firstMenu'>
            <FirstMenu/>      
        </div>
        <div className='secondMenu'>
           <SecondMenu/>
        </div>
    </div>
  )
}

export default Menu