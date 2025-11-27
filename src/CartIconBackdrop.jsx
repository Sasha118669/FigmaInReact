import React from "react";
import { useState } from "react";
import "./CartIconBackdrop.css";
import ShopingCartBox from "./ShopingCartBox.jsx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import {
  HeartIcon,
  BagDeleteIcon,
  SearchIcon,
  AccountIcon,
  CartIcon,
  HouseLogoIcon,
  ShopingCartBoxImg1,
} from "./assest.js";

export default function CartIconBackdrop({ setClicked }) {
  const {cardsArr, subtotal} = useContext(CartContext);
  return (
    <>
      <div
        className="CartIconBackdrop"
        onClick={() => {
          setClicked(false);
        }}></div>
        <div className="ShopingCartContainer">
      <div className="ShopingCart">
        <div className="ShopingCartTitle">
          <h2>Shoping Cart</h2>
          <button
            onClick={() => {
              setClicked(false);
            }}>
            <BagDeleteIcon />
          </button>
        </div>

        
          <div className="ShopingCartContent">
            {
              cardsArr.map((card, i) => 
              <ShopingCartBox
              ShopingCartBoxImg={card.img}
              ShopingCartName={card.productName}
              ShopingCartBoxTotal={card.price}
            />)
            }
          </div>

          <div className="ShopingCartSubtotal">
            <h2>Subtotal</h2>
            <input type="text" value={subtotal} disabled />
          </div>

          <div className="ShopingCartNav">
            <Link to="/cart" className="MyCartIconBackdropLink">
              Cart
            </Link>
            <Link to="/checkout" className="MyCartIconBackdropLink">
              Checkout
            </Link>
            <Link to="/productcomarison" className="MyCartIconBackdropLink">
              Comparison
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
