import React from "react";
import Home from './Home.jsx'
import Shop from './Shop.jsx'
import Cart from './Cart.jsx'
import Checkout from './Checkout.jsx'
import Contact from './Contact.jsx'
import Blog from './Blog.jsx'
import SingleProduct from './SingleProduct.jsx'
import ProductComarison from './ProductComarison.jsx'

import { Routes, Route } from "react-router-dom";
export default function App (){
    return <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/singleproduct/:sku" element={<SingleProduct />} />
        <Route path="/productcomarison" element={<ProductComarison />} />
    </Routes>
    </>;
}