import React from "react";
import "./CardInCart.css";
import {
  DeleteFilledIcon,
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

export default function CardInCart ({Img, Product, Price, Quantity, Subtotal}){

    return<>
    <div className="CardInCartContainer">

        <table className="myTable">
            <thead>
                <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
            </tr>
            </thead>
            
            <tbody>
                <tr>
                <td><img src={Img} alt={Product} /></td>
                <td>{Product}</td>
                <td>{Price}</td>
                <td><input type="text" value="1"/></td>
                <td>{Subtotal}</td>
                <td id="DeleteIcon"><DeleteFilledIcon/></td>
            </tr>
            </tbody>
        </table>

    </div>
    </>;
}