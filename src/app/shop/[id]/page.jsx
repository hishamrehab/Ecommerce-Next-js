"use client"
import React, { useEffect, useState } from 'react'
import PageHeader from "../../components/PageHeader";
import PopularPost from "../PopularPost"
import Tags from "./Tags"
import ProductDisplay from './ProductDisplay';
import Review from './Review';
import data from "../../products.json"
import Image from 'next/image'

const SingleProduct = ({ params }) => {
    const [product, setProduct] = useState({});
    const { id } = params;

    useEffect(() => {
        const selectedProduct = data.find((item) => {
            return item.id === id;
        })
        setProduct(selectedProduct);
    }, [id]);



    return (
        <div>
            <PageHeader title={"Our SHOP SINGLE"} curPage={"Shop / Single Product"} />
            <div className='shop-single padding-tb aside-bg'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        {/* left side */}
                        <div className='col-lg-8 col-12'>
                            <div className='product-details'>
                                <div className='row align-items-center'>
                                    <div className='col-md-6 col-12'>
                                        <div className='product-thumb'>
                                            <div className=' pro-single-top'>
                                                <div className='single-thumb'>
                                                    <Image src={product.img} alt='' width={500} height={500} />
                                                </div>


                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-6 col-12'>
                                        <div className='post-content'>
                                            <ProductDisplay key={product.id} item={product} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Review */}
                            <div className='review'>
                                <Review />
                            </div>
                        </div>
                        {/* Right side */}
                        <div className='col-lg-4 col-12'>
                            <aside className='ps-lg-4'>
                                <PopularPost />
                                <Tags />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct