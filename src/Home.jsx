import React from "react";
import { useState } from 'react'
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
import './Home.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
// import HeartIcon from './assets/icons/HeartIcon.jsx'
// import SearchIcon from './assets/icons/SearchIcon.jsx'
// import AccountIcon from './assets/icons/AccountIcon.jsx'
// import CartIcon from './assets/icons/CartIcon.jsx'
// import HouseLogoIcon from './assets/icons/HouseLogoIcon.svg'
// import ArrowIcon from './assets/icons/ArrowIcon.jsx'
// import DiningImg from './assets/pictures/First-img-SecondSectionMain.png'
// import LivingImg from './assets/pictures/Second-img-SecondSectionMain.png'
// import BedroomImg from './assets/pictures/Third-img-SecondSectionMain.png'
import Card from './Card.jsx'
import Shelf from './Shelf.jsx'
// import Imageges1 from './assets/pictures/Images1.png'
// import Imageges2 from './assets/pictures/Images2.png'
// import Imageges3 from './assets/pictures/Images3.png'
// import Imageges4 from './assets/pictures/Images4.png'
// import Imageges5 from './assets/pictures/Images5.png'
// import Imageges6 from './assets/pictures/Images6.png'
// import Imageges7 from './assets/pictures/Images7.png'
// import Imageges8 from './assets/pictures/Images8.png'
// import LeftSideImg1 from './assets/pictures/LeftSideImg1.png'
// import LeftSideImg2 from './assets/pictures/LeftSideImg2.png'
// import LeftSideImg3 from './assets/pictures/LeftSideImg3.png'
// import LeftSideImg4 from './assets/pictures/LeftSideImg4.png'
// import MidleImg from './assets/pictures/MidleImg.png'
// import RightSideImg1 from './assets/pictures/RightSideImg1.png'
// import RightSideImg2 from './assets/pictures/RightSideImg2.png'
// import RightSideImg3 from './assets/pictures/RightSideImg3.png'
// import RightSideImg4 from './assets/pictures/RightSideImg4.png'
import Swiper from './Swiper.jsx';


export default function Home (){

return <>
<Header/>
<main className='Main'>
    <section className='FirstSectionMain'>
        <div className='Box'>
            <h3>
                New Arrival
            </h3>

            <h2>
                Discover Our
                New Collection
            </h2>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis
                </p>

            <button id='BuyBtn'>
                BUY NOW
            </button>

        </div>
    </section>

    <section className='SecondSectionMain'>
    <div className='TitleInSecondSectionMain'>
    <h2>Browse The Range</h2>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

    <div className='Presentation'>
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

    <section className='ThirdSectionMain'> 
        <h2>Our Products</h2>
          <Shelf/>
    <button id='ShowMoreBtn'>Show More</button>
    </section>
   
    <section className='FourthSectionMain'>
      <div className='FourthSectionInfo'>
    <h2>50+ Beautiful rooms 
inspiration</h2>

    <button id='ExploreMoreBtn'>Explore More</button>
      </div>

      <div className="FourthSectionContentContainer">

      <div className='FourthSectionContent'>
        <div className='FourthSectionContainer'>
          <p>01-Bed Room</p>
          <h3>Inner Peace</h3>
        </div>
          <button><ArrowIcon/></button>
      </div>

    <div className='SwiperContent'>
    <Swiper/>
    </div>

      </div>
    </section>

    <section className='FifthSectionMain'>
        <p>Share your setup with</p>
        <h2>#FuniroFurniture</h2>

        <section className='Gallery'>
            
            <div className='LeftSide'>
                <img src={LeftSideImg1} alt="GalleryImg" className='LeftSideImg1'/>

            <img src={LeftSideImg2}  alt="GalleryImg" className='LeftSideImg2'/>

            <img src={LeftSideImg3}  alt="GalleryImg" className='LeftSideImg2'/>

            <img src={LeftSideImg4}  alt="GalleryImg" className='LeftSideImg4'/>
            </div>

            <div className='Midle'>
                 <img src={MidleImg} alt="GalleryImg" />
            </div>

            <div className='RightSide'>
                <img src={RightSideImg1} alt="GalleryImg" className='RightSideImg1'/>

            <img src={RightSideImg2}  alt="GalleryImg" className='RightSideImg2'/>

            <img src={RightSideImg3}  alt="GalleryImg" className='RightSideImg3'/>

            <img src={RightSideImg4}  alt="GalleryImg" className='RightSideImg4'/>
            </div>

        </section>
    </section>
</main>
<Footer/>
</>
}