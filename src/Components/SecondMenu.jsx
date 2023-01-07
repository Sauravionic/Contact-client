import React from 'react'
import "../CSS/SecondMenu.css";
import Messages from './Messages';

const SecondMenu = () => {
  return (
    <div className='secondMenuContainer'>
      <div className='box-top'>
        <h2>Messages</h2>
      </div>
      <div className='box-body'>
        <Messages/>
      </div>
    </div>
  )
}

export default SecondMenu