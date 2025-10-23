import React from "react";
import './Advantages.css'
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
  RightSideImg4
} from './assest.js';

export default function Advantages (){

    return <>
    <section className="Advantages">
              <div className="AdvantagesContainer">
    
                <div className="AdvantagesContent">
                          <TrophyIcon/>
                          <div className="AdvantagesInfo">
                    <h2>High Quality</h2>
                    <p>crafted from top materials</p>
                          </div>
                </div>
    
                <div className="AdvantagesContent">
                          <CheckMarkIcon/>
                          <div className="AdvantagesInfo">
                    <h2>Warranty Protection</h2>
                    <p>Over 2 years</p>
                          </div>
                </div>
    
                <div className="AdvantagesContent">
                          <BoxIcon/>
                          <div className="AdvantagesInfo">
                    <h2>Free Shipping</h2>
                    <p>Order over 150 $</p>
                          </div>
                </div>
    
                <div className="AdvantagesContent">
                          <SupportIcon/>
                          <div className="AdvantagesInfo">
                    <h2>24 / 7 Support</h2>
                    <p>Dedicated support</p>
                          </div>
                </div>
    
              </div>
            </section>
    </>;
}