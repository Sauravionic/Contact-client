import React from 'react'
import ContactInfoMenu from '../Components/ContactInfoMenu';
import FirstMenu from '../Components/FirstMenu'
import "../CSS/ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className='contactInfoContainer'>
        <div className='contactFirstMenu'>
            <FirstMenu />      
        </div>
        <div className='contactSecondMenu'>
              <ContactInfoMenu/>
        </div>  
    </div>
  )
}

export default ContactInfo