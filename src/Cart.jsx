import React from "react";
import "./Cart.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Advantages from "./Advantages.jsx";
import MainCover from "./MainCover.jsx";
import CardInCart from "./CardInCart.jsx";
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

export default function Cart() {

    return<>
    <Header/>

    <main className="Main">
        <MainCover pageName={"Cart"} />

          <section className="CartContainer">
                <CardInCart
                Img={AsgaardSofa5}
                Product="Asgaard sofa"
                Price="Rs. 250,000.00"
                Subtotal="Rs. 250,000.00"
                />
                <div className="CartContent">
                      <h2>Cart Totals</h2>

                      <div className="CartContentSubtotal">
                        <h3>Subtotal</h3>
                        <p>Rs. 250,000.00</p>
                      </div>

                      <div className="CartContentTotal">
                        <h3>Total</h3>
                        <p>Rs. 250,000.00</p>
                      </div>

                      <button id="CheckOutBtn">Check Out</button>
                </div>
          </section>

        <Advantages/>
    </main>

    <Footer/>
    </>;
}