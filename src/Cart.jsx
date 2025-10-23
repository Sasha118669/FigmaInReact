import React from "react";
import "./Cart.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Advantages from "./Advantages.jsx";
import MainCover from "./MainCover.jsx";
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
} from "./assest.js";

export default function Cart() {

    return<>
    <Header/>

    <main className="Main">
        <MainCover pageName={"Cart"} />

        <Advantages/>
    </main>

    <Footer/>
    </>;
}