import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";

export default function Footer (){
    return <>
    <footer className='Footer'>
    <section className='FooterContent'>
        <div className='FooterInfo'>
            <h2>Funiro.</h2>

            <p>400 University Drive Suite 200 Coral Gables,
FL 33134 USA</p>
</div>
<div className='FooterNav'>

<div className="FooterNavSect1">
    <h2>Links</h2>
    <Link to="/" className="MyFooterLink">Home</Link>
        <Link to="/shop" className="MyFooterLink">Shop</Link>
        <Link to="/blog" className="MyFooterLink">About</Link>
        <Link to="/contact" className="MyFooterLink">Contact</Link>
</div>

<div className="FooterNavSect1">
    <h2>Help</h2>
    <a>Payment Options</a>
    <a>Returns</a>
    <a>Privacy Policies</a>
</div>

</div>

<div className='FooterComent'>
<h2>Newsletter</h2>

<input type="email" placeholder='Enter Your Email Address'/>

<button>SUBSCRIBE</button>
</div>

    </section>
    <p className='Qualiification'>2023 furino. All rights reverved</p>
</footer>
</>;
}