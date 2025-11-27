import React from "react";
import './SingleProductCard.css'
import CardsData from './CardsData.js'
import { useState, useContext  } from 'react'
import { CartContext } from "./CartContext.jsx";
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
  RightSideImg4,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from './assest.js';
export default function SingleProductCard ({SingleProductCardName, SingleProductImg, SingleProductImg1, SingleProductImg2, SingleProductImg3, SingleProductImg4, SingleProductCardPrice, Size1, Size2, Size3,Sku, Category, Tags, product}){
    let[value, setValue] = useState(1);
    const { setSubtotal, setCardsArr } = useContext(CartContext);

    function addToCart (){
        if(product){
        setCardsArr(prev => [...prev, product]);

        setSubtotal(prev => {
        let prevNum = prev
        if(isNaN(prevNum)){
        prevNum = +(prevNum.split(" ")[1].replaceAll(".", "")); 
         }
        let productPrice = product.price;
            if(isNaN(productPrice)){
        productPrice = +(productPrice.split(" ")[1].replaceAll(".", "")); 
         }
         const totalPrice = prevNum + productPrice
         const formattedTotalPrice = totalPrice.toLocaleString("id-ID");
        return`Rp ${formattedTotalPrice}`
      });  
     }
    }
    
    return<>
    <section className="SingleProductCard">
<div className="SingleProductCardNav">
                <a>Home</a>
                <Arrow2Icon/>
                <a>Shop</a>
                <Arrow2Icon/>
                <p className="Slash">|</p>
                <p>{SingleProductCardName}</p>
            </div>

            <div className="SingleProductCardContent">
        
            <div className="SingleProductCardLeftContent">
            <div className="ProductImgGallery">
                <img src={SingleProductImg1} alt="" />
                <img src={SingleProductImg2} alt="" />
                <img src={SingleProductImg3} alt="" />
                <img src={SingleProductImg4} alt="" />
            </div>
            <img src={SingleProductImg} alt="" className="SingleProductImg"/>
            </div>

            <div className="SingleProductCardRightContent">
                <div className="SingleProductCardRightTitle">
                        <h2>{SingleProductCardName}</h2>
                        <p>{SingleProductCardPrice}</p>
                </div>

                <div className="SingleProductCardRightContentGrade">
                    <p className="Slash">|</p>
                    <p>5 Customer Review</p>
                </div>

                <p className="SingleProductCardRightContentDeskription">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>

                <div className="SizeColor">
                        <p>Size</p>
                    <div className="Size">
                        <button>{Size1}</button>
                        <button>{Size2}</button>
                        <button>{Size3}</button>
                    </div>

                        <p>Color</p>
                    <div className="Color">
                        <button className="Color1"></button>
                        <button className="Color2"></button>
                        <button className="Color3"></button>
                    </div>
                </div>

                <div className="SingleProductOrder">
                    <label className="SingleProductCounter">
                        <button id="Minus" onClick={() => setValue(value-1)}>
                            -
                            </button>
                        <input type="text" value={value} disabled/>
                        <button id="Plus" onClick={() => setValue(value+1)}>
                            +
                            </button>
                    </label>

                    <button onClick={addToCart}>
                        Add To Cart
                        </button>

                    <button>+ Compare</button>
                </div>

                <div className="SingleProductCardRightContentInfo">
                    <div className="SingleProductContentInfo">
                        <p className="SingleProductContentInfoName">SKU</p>
                        <p>:</p>
                        <p>{Sku}</p>
                    </div>
                    <div className="SingleProductContentInfo">
                        <p className="SingleProductContentInfoName">Category</p>
                        <p>:</p>
                        <p>{Category}</p>
                    </div>
                    <div className="SingleProductContentInfo">
                        <p className="SingleProductContentInfoName">Tags</p>
                        <p>:</p>
                        <p>{Tags}</p>
                    </div>
                    <div className="SingleProductContentInfo">
                        <p className="SingleProductContentInfoName">Share</p>
                        <p>:</p>
                        <FacebookIcon/>
                        <LinkedinIcon/>
                        <TwitterIcon/>
                    </div>

                </div>

            </div>
            </div>
    </section>
    </>;
}