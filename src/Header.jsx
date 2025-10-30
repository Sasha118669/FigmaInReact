import React from "react";
import { useState } from 'react'
import './Header.css'
import CartIconBackdrop from './CartIconBackdrop.jsx'
import { Link } from "react-router-dom";
import {
  HeartIcon,
  SearchIcon,
  AccountIcon,
  CartIcon,
  HouseLogoIcon,
  ShopingCartBoxImg1
} from "./assest.js";

export default function Header (){
    const [clicked, setClicked] = useState(false);
    
    return <>
    <header className='Header'>
    <section className='ContentHeader'>

<div className='LogoHeader'>
<img src={HouseLogoIcon} alt="House Logo" />
<h2>Furniro</h2>
    </div>

<div className='NavHeader1' > 
    <Link to="/">Home</Link>
    <Link to="/shop">Shop</Link>
    <Link to="/blog">About</Link>
    <Link to="/contact">Contact</Link>
</div>

<div className='NavHeader2'>
    <button><AccountIcon/></button>
    <button><SearchIcon/></button>
    <button><HeartIcon/></button>
    <button onClick={()=>{setClicked(true)}}>
        <CartIcon/>
        {clicked &&
            <CartIconBackdrop/>
        }
        </button>
</div>

    </section>
</header>
</>;
}