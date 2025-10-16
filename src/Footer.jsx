import './Footer.css'

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
<ul>
    <h2>Links</h2>
    <li>Home</li>
    <li>Shop</li>
    <li>About</li>
    <li>Contact</li>
</ul>

<ul>
    <h2>Help</h2>
    <li>Payment Options</li>
    <li>Returns</li>
    <li>Privacy Policies</li>
</ul>
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