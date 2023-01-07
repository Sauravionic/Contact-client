import React from 'react';
import Card from "./Card";
import "../CSS/Cards.css";
import { contactData } from "../data";
console.log(contactData.length);

const Cards = () => {
  return (
    <div className='cardsContainer'>
      {
        contactData.map((d,index) => {
          return (
            <Card data = { d } />
          )
        })
      }
    </div>
  )
}

export default Cards