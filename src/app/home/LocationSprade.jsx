"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
const title = "More Then 60,000 Customers";

const desc = "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
    {
        imgUrl: "/images/clients/avater.jpg",
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: "/images/clients/avater.jpg",
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: "/images/clients/avater.jpg",
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: "/images/clients/avater.jpg",
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: "/images/clients/avater.jpg",
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: "/images/clients/avater.jpg",
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: "/images/clients/avater.jpg",
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
]



const LocationSprade = () => {
    return (
        <div className='clients-section style-2 padding-tb'>
            <div className='container'>
                <div className='section-header text-center'>
                    <h2 className='title'>{title}</h2>
                    <p>{desc}</p>
                </div>
                {/* main content */}
                <div className='section-wrapper'>
                    <div className='clients'>
                        {
                            clientsList.map((val, i) => (
                                <div key={i} className='client-list'>
                                    <Link href="/sign-up" className='client-content'>
                                        <span>{val.text}</span>
                                    </Link>
                                    <div className='client-thumb'>
                                        <Image src={val.imgUrl} alt='' layout="fill" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationSprade
