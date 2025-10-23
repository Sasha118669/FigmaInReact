import React from "react";
import './MainCover.css'
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

export default function MainCover ({pageName}){
    
    return<>
    <section className='MainCover'>
              <img src={HouseLogoIcon} alt="House Logo" />
                <h2>{pageName}</h2>
                <div className="MainCoverNav">
                <a>Home</a>
                <a><Arrow2Icon/></a>
                <a>{pageName}</a>
                </div>
            </section>
    </>;
}