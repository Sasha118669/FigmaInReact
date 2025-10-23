import React from "react";
import { useState } from 'react'
import Card from './Card.jsx'
import './Shelf.css'
import {
 HeartIcon,
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
  RightSideImg4
} from './assest.js';
export default function Shelf (){

  return <>
  <div className='Shelf'>
    <Card
      img={Images1}
      discount="-30%"
      productName="Syltherine"
      shortDescription="Stylish cafe chair"
      price="Rp 2.500.000"
      fixPrice="Rp 3.500.000"
    />
    <Card
      img={Images2}
      discount="-30%"
      productName="Leviosa"
      shortDescription="Stylish cafe chair"
      price="Rp 2.500.000"
      fixPrice="Rp 3.500.000"
    />
    <Card
      img={Images3}
      discount="-50%"
      productName="Lolito"
      shortDescription="Luxury big sofa"
      price="Rp 7.000.000"
      fixPrice="Rp 14.000.000"
    />
    <Card
      img={Images4}
      newItem
      productName="Respira"
      shortDescription="Outdoor bar table and stool"
      price="Rp 500.000"
    />
  </div>
  
      <div className='Shelf'>
    <Card
      img={Images5}
      productName="Grifo"
      shortDescription="Night lamp"
      price="Rp 1.500.000"
    />
    <Card
      img={Images6}
      newItem
      productName="Muggo"
      shortDescription="Small mug"
      price="Rp 150.000"
    />
    <Card
      img={Images7}
      discount="-50%"
      productName="Pingky"
      shortDescription="Cute bed set"
      price="Rp 7.000.000"
      fixPrice="Rp 14.000.000"
    />
    <Card
      img={Images8}
      newItem
      productName="Potty"
      shortDescription="Minimalist flower pot"
      price="Rp 500.000"
    />
  </div>
  </>;
}