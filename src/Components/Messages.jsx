import React, { useEffect, useState } from 'react'
import Message from './Message'
import "../CSS/Messages.css";
import axios from "axios";

const Messages = () => {
  const [error, setError] = useState(false);
  const [info, setInfo] = useState([]);
  const fetchInfo = async () => {
    setError(false);
    try {
      const res = await axios.get("https://contacts-6dmt.onrender.com/api/info");
      setInfo(res.data);
      info.sort(function (a, b) {
        return new Date(b.createdAt).toTimeString() - new Date(a.createdAt).toTimeString();
      })
    } catch (err) {
      setError(true);
    }
  }

  useEffect(() => {
    fetchInfo();
  }, [])
  return (
    <div className='messagesContainer'>
      {
        info.map((inf, index) => {
          return(
            <Message props={inf} />
          )
        })
      }
    </div>
  )
}

export default Messages