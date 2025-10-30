import React from "react";
import "./Blog.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Advantages from "./Advantages.jsx";
import MainCover from "./MainCover.jsx";
import BlogContent from "./BlogContent.jsx";
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
  AsgaardSofa5,
  BlogContentImg1,
  BlogContentImg2,
  BlogContentImg3
} from "./assest.js";

export default function Blog() {
  return (
    <>
      <Header />

      <main className="Main">
        <MainCover pageName={"Blog"} />

          <CustomSwiper
          content1={<BlogContent 
          LeftSideBlogContent1Img={BlogContentImg1}
          LeftSideBlogContent1Title="Going all-in with millennial design"

          LeftSideBlogContent2Img={BlogContentImg2}
          LeftSideBlogContent2Title="Exploring new ways of decorating"

          LeftSideBlogContent3Img={BlogContentImg3}
          LeftSideBlogContent3Title="Handmade pieces that took time to make"
          />}
          />

        <Advantages />
      </main>

      <Footer />
    </>
  );
}
