import React from "react";
import { useState } from "react";
import "./ShopingCartBox.css";
import {
  HeartIcon,
  DeleteIcon,
  SearchIcon,
  AccountIcon,
  CartIcon,
  ArrowIcon,
  ShareIcon,
  CompareIcon,
  HouseLogoIcon,
  DiningImg,
  LivingImg,
  BedroomImg,
  Images1,
  Images2,
  Images3,
  Images4,
  Images5,
  Images6,
  Images7,
  Images8,
  LeftSideImg1,
  LeftSideImg2,
  LeftSideImg3,
  LeftSideImg4,
  MidleImg,
  RightSideImg1,
  RightSideImg2,
  RightSideImg3,
  RightSideImg4,
} from "./assest.js";

export default function ShopingCartBox({ShopingCartBoxImg, ShopingCartName, ShopingCartBoxTotal}) {

    return<>
    <div className="ShopingCartBox">
                <img src={ShopingCartBoxImg} alt="" />
    
                <div className="ShopingCartInfo">
                  <h2>{ShopingCartName}</h2>
                    <div className="ShopingCartInfoPrice">
                  <input type="text" value="1" disabled/>

                  <p>x</p>
                  
                  <h3>{ShopingCartBoxTotal}</h3>
                    </div>
                    
                </div>
              <DeleteIcon />

              </div>
    </>;
}