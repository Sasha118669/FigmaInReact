import React from "react";
import './SingleProduct.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import CardsData from './CardsData.js'
import SingleProductCard from './SingleProductCard.jsx'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
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
const [cardsCounter, setCardsCounter] = useState(4)
    const { sku } = useParams();
    const [product, setProduct] = useState(null); 

    useEffect(() => {
    const fetchedProduct = getProductById(sku); 
    setProduct(fetchedProduct);
  }, [sku]); 

  function getProductById(){
      return CardsData.find((cardData) => cardData.sku === sku);
    }
    if (!product) {
    return <div>Loading...</div>;
  } 
    return <>
    <Header/>

    <main className="Main">
        <div className="SingleProductCardContainer">
        <SingleProductCard
        SingleProductCardName={product.productName}
        SingleProductImg = {product.img}
        SingleProductImg1 = {product.img1}
        SingleProductImg2 = {product.img2}
        SingleProductImg3 = {product.img3}
        SingleProductImg4 = {product.img4}
        SingleProductCardPrice={product.price}
        Size1 ={product.size1}
        Size2 ={product.size2}
        Size3 ={product.size3}
        Sku={product.sku}
        Category={product.category}
        Tags={product.tags}
        product = {product}
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
                i >= cardsCounter ? null : 
                <Card 
                key={i}
                img={cardData.img}
                      discount={cardData.discount}
                      newItem={cardData.newItem}
                      productName={cardData.productName}
                      shortDescription={cardData.shortDescription}
                      price={cardData.price}
                      fixPrice={cardData.fixPrice}
                      sku={cardData.sku}
                />)
            }
            </div>
            <button id="ShowMoreBtn" onClick={()=>{setCardsCounter(cardsCounter+4)}}>
                Show More
                </button>
        </div>
    </main>

    <Footer/>
    </>;
}