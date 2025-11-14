import React from "react";
import "./BlogContent.css";
import { useState } from 'react'
import {
  HeartIcon,
  SearchIcon,
  AdminIcon,
  CalendarIcon,
  TagIcon,
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
  RightSideBlogRecentPostImg1,
  RightSideBlogRecentPostImg2,
  RightSideBlogRecentPostImg3,
  RightSideBlogRecentPostImg4,
  RightSideBlogRecentPostImg5
} from "./assest.js";

export default function BlogContent({
  LeftSideBlogContent1Img,
  LeftSideBlogContent1Title, LeftSideBlogContent2Img, LeftSideBlogContent2Title, LeftSideBlogContent3Img, LeftSideBlogContent3Title
}) {
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);

  const handleClick1 = () => {
    setClick1(prev => !prev);
  };
  const handleClick2 = () => {
    setClick2(prev => !prev);
  };
  const handleClick3 = () => {
    setClick3(prev => !prev);
  };
  return (
    <>
      <section className="BlogContent">
        <div className="LeftSideBlogContainer">
          <div className="LeftSideBlogContent">
            <img src={LeftSideBlogContent1Img} alt="" />
            <div className="LeftSideBlogContentInfo">
              <div className="BlogContentInfo">
                <AdminIcon />
                <p>Admin</p>
              </div>

              <div className="BlogContentInfo">
                <CalendarIcon />
                <p>14 Oct 2022</p>
              </div>

              <div className="BlogContentInfo">
                <TagIcon />
                <p>Wood</p>
              </div>
            </div>

            <h2>{LeftSideBlogContent1Title}</h2>

            <p className="BlogContentInfoDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            {click1 && 
              <p className="BlogContentInfoDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
              }
            <button onClick={handleClick1}>
      {click1 ? "Put Away" : "Read More"}
    </button>
          </div>

          <div className="LeftSideBlogContent">
            <img src={LeftSideBlogContent2Img} alt="" />
            <div className="LeftSideBlogContentInfo">
              <div className="BlogContentInfo">
                <AdminIcon />
                <p>Admin</p>
              </div>

              <div className="BlogContentInfo">
                <CalendarIcon />
                <p>14 Oct 2022</p>
              </div>

              <div className="BlogContentInfo">
                <TagIcon />
                <p>Wood</p>
              </div>
            </div>

            <h2>{LeftSideBlogContent2Title}</h2>

            <p className="BlogContentInfoDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            {click2 && 
              <p className="BlogContentInfoDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
              }
            <button onClick={handleClick2}>
      {click2 ? "Put Away" : "Read More"}
    </button>
          </div>

          <div className="LeftSideBlogContent">
            <img src={LeftSideBlogContent3Img} alt="" />
            <div className="LeftSideBlogContentInfo">
              <div className="BlogContentInfo">
                <AdminIcon />
                <p>Admin</p>
              </div>

              <div className="BlogContentInfo">
                <CalendarIcon />
                <p>14 Oct 2022</p>
              </div>

              <div className="BlogContentInfo">
                <TagIcon />
                <p>Wood</p>
              </div>
            </div>

            <h2>{LeftSideBlogContent3Title}</h2>

            <p className="BlogContentInfoDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            {click3 && 
              <p className="BlogContentInfoDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
              }
            <button onClick={handleClick3}>
      {click3 ? "Put Away" : "Read More"}
    </button>
          </div>

        </div>

        <div className="RightSideBlogContent">
          <label className="SearchField">
            <input type="text" />
            <button>
              <SearchIcon />
            </button>
          </label>

          <div className="RightSideBlogCategories">
            <h2>Categories</h2>

            <div className="RightSideBlogCategorie">
              <p>Crafts</p>
              <p>2</p>
            </div>

            <div className="RightSideBlogCategorie">
              <p>Design</p>
              <p>8</p>
            </div>

            <div className="RightSideBlogCategorie">
              <p>Handmade</p>
              <p>7</p>
            </div>

            <div className="RightSideBlogCategorie">
              <p>Interior</p>
              <p>1</p>
            </div>

            <div className="RightSideBlogCategorie">
              <p>Wood</p>
              <p>6</p>
            </div>
          </div>

          <div className="RightSideBlogRecentPosts">
            <h2>Recent Posts</h2>

            <div className="RightSideBlogRecentPost">
              <img src={RightSideBlogRecentPostImg1} alt="" />
              <div className="RightSideBlogRecentPostInfo">
                <h2>Going all-in with millennial design</h2>
                <p>03 Aug 2022</p>
              </div>
            </div>

            <div className="RightSideBlogRecentPost">
              <img src={RightSideBlogRecentPostImg2} alt="" />
              <div className="RightSideBlogRecentPostInfo">
                <h2>Exploring new ways of decorating</h2>
                <p>03 Aug 2022</p>
              </div>
            </div>

            <div className="RightSideBlogRecentPost">
              <img src={RightSideBlogRecentPostImg3} alt="" />
              <div className="RightSideBlogRecentPostInfo">
                <h2>Handmade pieces that took time to make</h2>
                <p>03 Aug 2022</p>
              </div>
            </div>

            <div className="RightSideBlogRecentPost">
              <img src={RightSideBlogRecentPostImg4} alt="" />
              <div className="RightSideBlogRecentPostInfo">
                <h2>Modern home in Milan</h2>
                <p>03 Aug 2022</p>
              </div>
            </div>

            <div className="RightSideBlogRecentPost">
              <img src={RightSideBlogRecentPostImg5} alt="" />
              <div className="RightSideBlogRecentPostInfo">
                <h2>Colorful office redesign</h2>
                <p>03 Aug 2022</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
