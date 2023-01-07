import React from 'react';
import "../CSS/Message.css";

const Message = ({ props }) => {
  console.log(props);
  return (
    <div className='messageCard'>
        <div className='messageCard-header'>
            <h3>{props.name} | </h3>
            <span>{props.phoneNo}</span>
        </div>
        <div className='messageCard-body'>
            <h4>Time: </h4>
            <span>{ new Date(props.createdAt).toDateString()}</span>  
        </div>
        <div className='messageCard-otp'>
            <h4>Otp:</h4>
            <span>{props.message}</span>  
        </div>  
    </div>
  )
}

export default Message