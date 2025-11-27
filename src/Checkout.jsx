import React from "react";
import "./Checkout.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Advantages from "./Advantages.jsx";
import MainCover from "./MainCover.jsx";
import Check from "./Check.jsx";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import CardsData from './CardsData.js'
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

export default function Checkout() {
const {cardsArr, subtotal} = useContext(CartContext);
    return<>
    <Header/>

    <main className="Main">
        <MainCover pageName={"Checkout"} />

        <section className="CheckoutContainer">
            <div className="LeftSideCheckoutContent">
                <h2>Billing details</h2>

                  <div className="NameLastName">
                  <label className="FirstName">
                    First Name
                    <input type="name" />
                  </label>

                  <label className="LastName">
                    Last Name
                    <input type="name" />
                  </label>
                  </div>
                

                
                <label>
                    Company Name (Optional)
                    <input type="text" />
                  </label>

                <label>
                    Country / Region
                    <input type="name" placeholder="Sri Lanka"/>
                  </label>

                <label>
                    Street address
                    <input type="text" />
                  </label>

                <label>
                    Town / City
                    <input type="text" />
                  </label>

                <label>
                    Province
                    <input type="text" placeholder="Western Province"/>
                  </label>

                <label>
                    ZIP code
                    <input type="text" />
                  </label>

                <label>
                    Phone
                    <input type="number" />
                  </label>

                <label>
                    Email address
                    <input type="email" />
                  </label>

                <label>
                  <input type="text" placeholder="Additional information"/>
                </label>
            </div>

            <div className="RightSideCheckoutContent">

                  <Check
                  SubtotalPrice={subtotal}
                  TotalPrice={subtotal}
                  />

                  <div className="RightSideCheckoutInfo">
                  <label>
                <input type="radio"/>
                      Direct Bank Transfer
                  </label>

                <p>
                  Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                </p>

                    <label>
                <input type="radio"/>
                      Direct Bank Transfer
                  </label>

                    <label>
                <input type="radio"/>
                      Cash On Delivery
                  </label>

                <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span>privacy policy.</span></p>

                <button id="PlaceOrder">Place order</button>
                  </div>
            </div>
        </section>

        <Advantages/>
    </main>

    <Footer/>
    </>;
}