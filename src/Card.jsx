import React from "react";
import './Card.css'
import HeartIcon from './assets/icons/HeartIcon.jsx'
import ShareIcon from './assets/icons/ShareIcon.jsx'
import CompareIcon from './assets/icons/CompareIcon.jsx'
import { useState } from 'react'
export default function Card({ img, discount, newItem, productName, shortDescription, price, fixPrice }) {
const [clicked, setClicked] = useState(false);

  return (<>
    <div className="Card" onClick={()=> setClicked(true)}>
      {clicked &&
     <div className='Backdrop'>
        <div className='BackdropContent'>
            <button>Add to cart</button>
            <ul>
              <li><ShareIcon/>Share</li>
              <li><CompareIcon/>Compare</li>
              <li><HeartIcon/>Like</li>
            </ul>
        </div>
     </div>
     }
      <img src={img} alt={productName} />
      {discount && <div className="Discount">{discount}</div>}
      {newItem && <div className="NewItem">New</div>}
      <div className="CardDescription">
      <h2>{productName}</h2>
      <p>{shortDescription}</p>
      
      <div className="Prices">
        <span className="Price">{price}</span>
        {fixPrice && <span className="FixPrice">{fixPrice}</span>}
      </div>
    </div>
      </div>
    </>
  );
}