"use client"
import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader';
import { Swiper, SwiperSlide } from "swiper/react";
import PopularPost from "./PopularPost"
import Tags from "./Tags"
import "swiper/css";
import { Autoplay } from "swiper/modules"
import ProductDisplay from './[id]/ProductDisplay';
import Review from './Review';
import data from "../products.json"

const SingleProduct = ({ params }) => {
    const [product, setProduct] = useState({});
    let id = params;

    useEffect(() => {
        const selectedProduct = data.find((item) => {
            return item.id === id;
        })
        setProduct(selectedProduct);
    }, []);



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
                                            <div className='swiper-container pro-single-top'>


                                                <div className='single-thumb'>
                                                    <img src={product.img} alt='' />
                                                </div>




                                                <div className='pro-single-prev'>
                                                    <i className='icofont-rounded-right'></i>
                                                </div>
                                                <div className='pro-single-next'>
                                                    <i className='icofont-rounded-left'></i>
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