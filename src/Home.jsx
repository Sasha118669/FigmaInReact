import React from "react";
import { useState } from "react";
import Card from "./Card.jsx";
import CardsData from "./CardsData.js";
import './global.css';
import './responsive.css';
import "./Home.css";
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
  RightSideImg4,
} from "./assest.js";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Swiper from "./Swiper.jsx";

export default function Home() {

  const [cardsCounter, setCardsCounter] = useState(8)
  return (
    <>
      <Header />
      <main className="Main">
        <section className="FirstSectionMain">
          <div className="Box">
            <h3>New Arrival</h3>

            <h2>Discover Our New Collection</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis
            </p>

            <button id="BuyBtn">BUY NOW</button>
          </div>
        </section>

        <section className="SecondSectionMain">
          <div className="TitleInSecondSectionMain">
            <h2>Browse The Range</h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="Presentation">
            <figure>
              <img src={DiningImg} alt="First-img-SecondSectionMain" />
              <figcaption>Dining</figcaption>
            </figure>

            <figure>
              <img src={LivingImg} alt="Second-img-SecondSectionMain" />
              <figcaption>Living</figcaption>
            </figure>

            <figure>
              <img src={BedroomImg} alt="Third-img-SecondSectionMain" />
              <figcaption>Bedroom</figcaption>
            </figure>
          </div>
        </section>

        <section className="ThirdSectionMain">
          <h2>Our Products</h2>
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
        </section>

        <section className="FourthSectionMain">
          <div className="FourthSectionInfo">
            <h2>50+ Beautiful rooms inspiration</h2>

            <button id="ExploreMoreBtn">Explore More</button>
          </div>

          <div className="FourthSectionContentContainer">
            <div className="FourthSectionContent">
              <div className="FourthSectionContainer">
                <p>01-Bed Room</p>
                <h3>Inner Peace</h3>
              </div>
              <button>
                <ArrowIcon />
              </button>
            </div>

            <div className="SwiperContent">
              <Swiper />
            </div>
          </div>
        </section>

        <section className="FifthSectionMain">
          <p>Share your setup with</p>
          <h2>#FuniroFurniture</h2>

          <section className="Gallery">
            <div className="LeftSide">
              <img
                src={LeftSideImg1}
                alt="GalleryImg"
                className="LeftSideImg1"
              />

              <img
                src={LeftSideImg2}
                alt="GalleryImg"
                className="LeftSideImg2"
              />

              <img
                src={LeftSideImg3}
                alt="GalleryImg"
                className="LeftSideImg2"
              />

              <img
                src={LeftSideImg4}
                alt="GalleryImg"
                className="LeftSideImg4"
              />
            </div>

            <div className="Midle">
              <img src={MidleImg} alt="GalleryImg" />
            </div>

            <div className="RightSide">
              <img
                src={RightSideImg1}
                alt="GalleryImg"
                className="RightSideImg1"
              />

              <img
                src={RightSideImg2}
                alt="GalleryImg"
                className="RightSideImg2"
              />

              <img
                src={RightSideImg3}
                alt="GalleryImg"
                className="RightSideImg3"
              />

              <img
                src={RightSideImg4}
                alt="GalleryImg"
                className="RightSideImg4"
              />
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
