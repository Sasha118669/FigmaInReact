import React from "react";
import './Shop.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Shelf from './Shelf.jsx'
import Advantages from './Advantages.jsx'
import MainCover from './MainCover.jsx'
import CustomSwiper from './CustomSwiper.jsx'
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
export default function Shop (){
    return<>
    <Header/>

    <main className='Main'>
        <MainCover
        pageName = {"Shop"}
        />

        <section className="ShopFilter">
              <div className="LeftSideFilter">
                    <div className="FilterElement">
                      <FilterIcon/>
                      <p>Filter</p>
                    </div>
                      <GridIcon/>
                      <AlignJustifyIcon/>

                  <p>|</p>
                    <input type="text" placeholder=" Showing 1–16 of 32 results" disabled/>
              </div>

              <div className="RightSideFilter">
                    <span>
                      <p>Show</p>
                      <input type="text" placeholder="16" disabled/>
                    </span>

                    <span>
                      <p>Short by</p>
                      <input type="text" placeholder="Default" disabled/>
                    </span>
              </div>
      </section>

        <section className='MainContetn'>
          <div className='SwiperContent'>
               <CustomSwiper 
               content1 = {<Shelf/>}
               content2 = {<Shelf/>}
               />
               </div>
        </section>

<Advantages/>
    </main>

    <Footer/>
    </>;
}