import React from "react";
import { useState, useEffect } from 'react'
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
    useEffect(() =>{
        if(clicked){
            document.body.style.overflow = "hidden";
        } else{
            document.body.style.overflow = "auto";
        }
    }, [clicked])

    return <>
    <header className='Header'>
    <section className='ContentHeader'>

<div className='LogoHeader'>
<img src={HouseLogoIcon} alt="House Logo" />
<h2>Furniro</h2>
    </div>

<div className='NavHeader1' > 
    <Link to="/" className="MyHeaderLink">Home</Link>
    <Link to="/shop" className="MyHeaderLink">Shop</Link>
    <Link to="/blog" className="MyHeaderLink">About</Link>
    <Link to="/contact" className="MyHeaderLink">Contact</Link>
</div>

<div className='NavHeader2'>
    <button><AccountIcon/></button>
    <button><SearchIcon/></button>
    <button><HeartIcon/></button>
    <button onClick={()=>{setClicked(true)}}>
        <CartIcon/>
        </button>
        {clicked &&
            <CartIconBackdrop setClicked = {setClicked}/>
        }
</div>


<div className="Burger">
<input type="checkbox" id="burger-toggle" className="burger-checkbox" />

<label htmlFor="burger-toggle" className="burger">
  <span></span>
  <span></span>
  <span></span>
</label>

<div className="burger-menu">
  <Link to="/">Home</Link>
  <Link to="/shop">Shop</Link>
  <Link to="/blog">About</Link>
  <Link to="/contact">Contact</Link>
</div>
</div>

    </section>
</header>
</>;
}