import React from "react";
import "./Check.css";
import {
  HeartIcon,
  SearchIcon,
  AccountIcon,
  CartIcon,
  ArrowIcon,
  Arrow2Icon,
  TrophyIcon,
  CheckMarkIcon,
  BoxIcon,
  SupportIcon,
  FilterIcon,
  GridIcon,
  AlignJustifyIcon,
  ShareIcon,
  CompareIcon,
  HouseLogoIcon,
  LocationIcon,
  PhoneIcon,
  TimeIcon,
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
  AsgaardSofa5,
} from "./assest.js";

export default function Check({ProductPrice,SubtotalPrice, TotalPrice}) {

    return<>
    <div className="CheckContainer">
        <div className="LeftSideCheck">
        <h2>Product</h2>
        <div className="ProductCounter">
        <p>Asgaard sofa</p>
        <input type="text" value="x  1" disabled/>
        </div>
        <p>Subtotal</p>
        <p>Total</p>
    </div>
    <div className="RightSideCheck">
        <h2>Subtotal</h2>
        <p>{ProductPrice}</p>
        <p>{SubtotalPrice}</p>
        <h3>{TotalPrice}</h3>
    </div>
    </div>
    </>;
}