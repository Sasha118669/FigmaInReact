import React from "react";
import './Card.css'
import { useState } from 'react'
import { Link } from "react-router-dom";
export default function Card({ img, discount, newItem, productName, shortDescription, price, fixPrice, sku }) {

  return (<>
    <div className="Card">
      <Link to={`/singleproduct/${sku}`}>
      <img src={img} alt={productName} />
      </Link>
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