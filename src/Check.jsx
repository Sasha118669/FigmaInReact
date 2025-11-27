import React from "react";
import "./Check.css";
import { useContext } from "react";
import { CartContext } from "./CartContext";
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

export default function Check({ProductPrice,SubtotalPrice, TotalPrice, ProductName}) {
const {cardsArr, subtotal} = useContext(CartContext);

const productsInfo = cardsArr.map(card => {
  return {
    name: card.productName,
    price: card.price
  };
});
    return<>
    <div className="CheckContainer">
        <div className="LeftSideCheck">
        <h2>Product</h2>
        {productsInfo.map((product, i) => (
          <div key={i} className="ProductCounter">
            <p>{product.name}</p>
          </div>
        ))}
        <p>Subtotal</p>
        <p>Total</p>
    </div>
    <div className="RightSideCheck">
        <h2>Subtotal</h2>
         {productsInfo.map((product, i) => (
          <p key={i}>{product.price}</p>
        ))}
        <p>{SubtotalPrice}</p>
        <h3>{TotalPrice}</h3>
    </div>
    </div>
    </>;
}