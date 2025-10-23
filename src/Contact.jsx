import React from "react";
import "./Contact.css";
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

export default function Contact() {
  return (
    <>
      <Header />

      <main className="Main">
        <MainCover pageName={"Contact"} />

        <section className="ContactMainContainer">
            <div className="ContactMainContainerHeading">
          <h2>Get In Touch With Us</h2>
          <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
          <div className="ContactMainContent">
            <div className="ContactMainLeftContent">

              <div className="ContactContent">
                <LocationIcon />
                <div className="ContactInfo">
                  <h2>Address</h2>
                  <p>236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>

              <div className="ContactContent">
                <PhoneIcon />
                <div className="ContactInfo">
                  <h2>Phone</h2>
                  <p>Mobile: +(84) 546-6789
Hotline: +(84) 456-6789</p>
                </div>
              </div>

              <div className="ContactContent">
                <TimeIcon />
                <div className="ContactInfo">
                  <h2>Working Time</h2>
                  <p>Monday-Friday: 9:00 - 22:00
Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>


            </div>

            <div className="ContactMainRightContent">
              <label>
                Your name
                <input type="name" placeholder="Abc" />
              </label>

              <label>
                Email address
                <input type="email" placeholder="Abc@def.com" />
              </label>

              <label>
                Subject
                <input type="subject" placeholder="This is an optional" />
              </label>

              <label>
                Message
                <input type="text" placeholder="Hi! i’d like to ask about" />
              </label>

              <button id="SubmitBtn">Submit</button>
            </div>
          </div>
        </section>

        <Advantages />
      </main>

      <Footer />
    </>
  );
}
