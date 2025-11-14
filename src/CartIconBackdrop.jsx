import React from "react";
import { useState } from "react";
import "./CartIconBackdrop.css";
import ShopingCartBox from "./ShopingCartBox.jsx";
import { Link } from "react-router-dom";
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
            <ShopingCartBox
              ShopingCartBoxImg={ShopingCartBoxImg1}
              ShopingCartName="Asgaard sofa"
              ShopingCartBoxTotal="Rs. 250,000.00"
            />
            <ShopingCartBox
              ShopingCartBoxImg={ShopingCartBoxImg1}
              ShopingCartName="Asgaard sofa"
              ShopingCartBoxTotal="Rs. 250,000.00"
            />
          </div>

          <div className="ShopingCartSubtotal">
            <h2>Subtotal</h2>
            <input type="text" value="Rs. 520,000.00" disabled />
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
