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
    <h3>Home</h3>
    <h3>Shop</h3>
    <h3>About</h3>
    <h3>Contact</h3>
</div>

<div className='NavHeader2'>
    <h3><AccountIcon/></h3>
    <h3><SearchIcon/></h3>
    <h3><HeartIcon/></h3>
    <h3><CartIcon/></h3>
</div>

    </section>
</header>
</>;
}