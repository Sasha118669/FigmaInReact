import React from "react";
import './Header.css'
import HeartIcon from './assets/icons/HeartIcon.jsx'
import SearchIcon from './assets/icons/SearchIcon.jsx'
import AccountIcon from './assets/icons/AccountIcon.jsx'
import CartIcon from './assets/icons/CartIcon.jsx'
import HouseLogoIcon from './assets/icons/HouseLogoIcon.svg'

export default function Header (){
    return <>
    <header className='Header'>
    <section className='ContentHeader'>

<div className='LogoHeader'>
<img src={HouseLogoIcon} alt="House Logo" />
<h2>Furniro</h2>
    </div>

<div className='NavHeader1' > 
    <a>Home</a>
    <a>Shop</a>
    <a>About</a>
    <a>Contact</a>
</div>

<div className='NavHeader2'>
    <a><AccountIcon/></a>
    <a><SearchIcon/></a>
    <a><HeartIcon/></a>
    <a><CartIcon/></a>
</div>

    </section>
</header>
</>;
}