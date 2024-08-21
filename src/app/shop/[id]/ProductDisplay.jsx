"use client"
import React, { useState } from 'react'
import Link from 'next/link'


const ProductDisplay = ({ item }) => {
    const { name, id, price, seller, ratingCount, quantity, img } = item
    const [preQuantity, setQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState("");
    const [size, setSize] = useState(" Select Size");
    const [color, setColor] = useState(" Select Color");


    const handleSizeChange = (e) => {
        setSize(e.target.value);
    }

    const handleChangeColor = (e) => {
        setColor(e.target.value);
    }

    const handleDecrease = () => {
        if (preQuantity > 1) {
            setQuantity(preQuantity - 1)
        }
    }
    const handleIncrease = () => {
        setQuantity(preQuantity + 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
            id: id,
            img: img,
            name: name,
            price: price,
            quantity: preQuantity,
            size: size,
            color: color,
            coupon: coupon,
        }
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProductIndex = existingCart.findIndex((item) => item.id === id);

        if (existingProductIndex !== -1) {
            existingCart[existingProductIndex].quantity += preQuantity;
        } else {
            existingCart.push(product);
        }
        // update loaclStorage
        localStorage.setItem("cart", JSON.stringify(existingCart));
        //reset from homepage
        setQuantity(1);
        setSize("Select Size");
        setColor("Select Color");
        setCoupon("");
    }

    return (
        <div>
            <h4>{name}</h4>
            <p className='rating'>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <span>{ratingCount} review</span>
            </p>
            <h4>${price}</h4>
            <h6>{seller}</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quaerat nobis suscipit vitae iure illum praesentium.</p>
            {/* cart component */}
            <div>
                <form onSubmit={handleSubmit} >
                    {/* sizing */}
                    <div className='select-product size' onChange={handleSizeChange}>
                        <select value={size}>
                            <option>Select Size</option>
                            <option value="SM">SM</option>
                            <option value="MD">MD</option>
                            <option value="LG">LG</option>
                            <option value="XXL">XXL</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>

                    {/* color */}
                    <div className='select-product color' onChange={handleChangeColor}>
                        <select value={color}>
                            <option>Select Color</option>
                            <option value="Pink">Pink</option>
                            <option value="Ash">Ash</option>
                            <option value="Red">Red</option>
                            <option value="White">White</option>
                            <option value="Blue">Blue</option>
                            <option value="Black">Black</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>
                    {/* cart plus minus */}
                    <div className='cart-plus-minus'>
                        <div className='dec qtybutton' onClick={handleDecrease}>-</div>
                        <input className='cart-plus-minus-box' type='text' name='qtybutton' id='qtybutton' value={preQuantity} onChange={(e) => setQuantity(parent(e.target.value, 10))} />
                        <div className='inc qtybutton' onClick={handleIncrease}>+</div>
                    </div>
                    {/* coupon field */}
                    <div className='discount-code mb-2'>
                        <input type='text' placeholder='Enter Discount Code' onChange={(e) => setCoupon(e.target.value)} />
                    </div>
                    {/* btn sections */}
                    <button type='submit' className='lab-btn'>
                        <span>Add to cart</span>
                    </button>
                    <Link href="/cart" className='lab-btn bg-primary'>
                        <span>Check Out</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default ProductDisplay