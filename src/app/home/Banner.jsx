"use client"
import React, { useState } from 'react'
import productData from "../products.json";
import Link from 'next/link';
import SelectedCategory from "../components/SelectedCategory"
import Image from 'next/image'

const title = (
    <h2>Search Your One <span>Thousand</span> of Products</h2>
)
const desc = "We have the largest collection of products "



const Banner = () => {
    const [searchInput, setSearchInput] = useState("");
    const [filterProducts, setFilterProducts] = useState(productData);

    // Search funtionality
    const handleSearch = (e) => {
        const searchTerm = e.target.value;
        setSearchInput(searchTerm);

        // filtering products based on search
        const filtered = productData.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilterProducts(filtered);
    }


    return (
        <div className='banner-section style-4'>
            <div className='container'>
                <div className='banner-content'>
                    {title}
                    <form>
                        <SelectedCategory select={"all"} />
                        <input
                            id="search"
                            type="text"
                            name='search'
                            value={searchInput}
                            onChange={handleSearch}
                            placeholder="Search products..."
                        />


                        <button type='submit'>
                            <i className='icofont-search'></i>
                        </button>
                    </form>
                    <p>{desc}</p>
                    <ul className="lab-ul">
                        {
                            searchInput && filterProducts.map((product, i) => {
                                return (
                                    <li key={i}>
                                        <Link href={`/shop/${product.id}`}>{product.name}</Link>
                                        <Link href={`/shop/${product.id}`}>
                                            <Image
                                                src={product.img}
                                                width={60}
                                                height={60}
                                                alt="Picture of the author"
                                                style={{
                                                    padding: "5px"
                                                }}
                                            />


                                        </Link>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Banner