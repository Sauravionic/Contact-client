import React, { useEffect, useState } from 'react';
import "../CSS/ContactInfoMenu.css";
import Photo1 from "../Images/Photo1.jpg";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { TbFileDescription } from "react-icons/tb";
import { contactData } from "../data";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const ContactInfoMenu = () => {
   const navigate = useNavigate();
   const [contact, setContact] = useState({});
   const [message, setMessage] = useState("");
   const [error, setError] = useState(false);

   const compose = async (e) => {
      e.preventDefault();
      setError(false);
      const otp = Math.random().toString().substr(2, 6);
      console.log(otp);
      const messages = "Hi your otp is " + otp + ": Extra Message:-\n:-  " + message;


      try {
         const res = await axios.post("https://contacts-6dmt.onrender.com/api/send-text", {
            "phoneNo": contact.phoneNo,
            "textMessage": messages,
         })

         try {
            const res1 = await axios.post("https://contacts-6dmt.onrender.com/api/info", {
               "name": contact.name,
               "email": contact.email,
               "phoneNo": contact.phoneNo,
               "description": contact.description,
               "message": messages,
               "category": contact.category
            })

            window.location = "/";

         } catch (err) {
            setError(true);
         }

      } catch (err) {
         setError(true);
      }
      console.log(error);
   }
   useEffect(() => {
      const id = window.location.pathname.split("/")[2];
      const ans = contactData.find(item => {
         return item.id == id;
      })
      setContact(ans);
  },[navigate])
  return (
     <div className='contactInfoMenuContainer'>
        <div className='box-top'>
           <h2>Contact Info</h2>
        </div>
        <div className='box-body'>
           <div className='box-body-container1'>
              <div className='box-body-container1-Heading'>
                 <h1>{ contact.name } | </h1> 
                  <span>{ contact.category }</span>
              </div>
              <div className='box-body-img'>
                 <img src= { contact.image } alt = "pic"></img>
              </div>
           </div>
           <hr />
           <div className='box-body-container2'>
              <div className='inner-container1'>
                 <FiPhoneCall className='icon' />
                 <span>:</span>
                 <h2>{contact.phoneNo}</h2>
              </div>
              <div className='inner-container2'>
                 <MdOutlineMail className='icon' />
                 <span>:</span>
                 <h2>{ contact.email }</h2>
              </div>
              <div className='inner-container3'>
                 <TbFileDescription className='icon' />
                 <span>:</span>
                 <h2>{ contact.description }</h2>
              </div>
           </div>
           <hr />
           <div className='box-body-container3'>
              <input type="text" placeholder='Enter your message here' onChange={(e) => setMessage(e.target.value)}/>
              <button onClick={compose}>Compose</button>
           </div>
        </div>
        {error && <span className='error_span'>There is some issue with the server. Hang On!!</span>}
    </div>
  )
}

export default ContactInfoMenu