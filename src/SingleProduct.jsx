import React from "react";
import './SingleProduct.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import CardsData from './CardsData.js'
import SingleProductCard from './SingleProductCard.jsx'
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
  SingleProductImg,
  SingleProductImg1,
  SingleProductImg2,
  SingleProductImg3,
  SingleProductImg4,
  DescriptionImg
} from './assest.js';
export default function SingleProduct (){

    return <>
    <Header/>

    <main className="Main">
        <div className="SingleProductCardContainer">
        <SingleProductCard
        SingleProductCardName="Asgard sofa"
        SingleProductImg = {SingleProductImg}
        SingleProductImg1 = {SingleProductImg1}
        SingleProductImg2 = {SingleProductImg2}
        SingleProductImg3 = {SingleProductImg3}
        SingleProductImg4 = {SingleProductImg4}
        SingleProductCardPrice="Rs. 250,000.00"
        Size1 ="L"
        Size2 ="XL"
        Size3 ="XS"
        Sku="SS001"
        Category="Sofas"
        Tags="Sofa, Chair, Home, Shop"
        />
        </div>

        <div className="Description">
        <div className="DescriptionTitle">
            <h2 tabindex="0">Description</h2>
            <h2 tabindex="0">Additional Information</h2>
            <h2 tabindex="0">Reviews [5]</h2>
        </div>

        <div className="DescriptionContent">
        <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>

        <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>
        
        <div className="DescriptionImg">
            <img src={DescriptionImg} alt="" />
            <img src={DescriptionImg} alt="" />
        </div>

        </div>

        <div className="RelatedProducts">
            <h2>Related Products</h2>

            <div className="Shelf">
{
                CardsData.map((cardData, i)=> 
                i >= 4 ? null : 
                <Card 
                img={cardData.img}
                      discount={cardData.discount}
                      newItem={cardData.newItem}
                      productName={cardData.productName}
                      shortDescription={cardData.shortDescription}
                      price={cardData.price}
                      fixPrice={cardData.fixPrice}
                />)
            }
            </div>
            <button id="ShowMoreBtn">Show More</button>
        </div>
    </main>

    <Footer/>
    </>;
}