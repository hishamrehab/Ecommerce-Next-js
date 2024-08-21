"use client"
import Link from 'next/link';
import image1 from "../../../public/images/app/01.jpg"
import image2 from "../../../public/images/app/02.jpg"

const btnText = "sign up for free";
const title = "shop Anytime, Anywhere"
const desc = "Take shop on your any device with our app & learn all time what you want, Just download & install & start to learn"

const AppSection = () => {
    return (
        <div className='app-section padding-tb'>
            <div className='container'>
                <div className='section-header text-center'>
                    <Link href="/sign-up" className='lab-btn mb-4'>{btnText}</Link>
                    <h2 className='title'>{title}</h2>
                    <p>{desc}</p>
                </div>
                <div className='section-wrapper'>
                    <ul className='lab-ul'>
                        <li><a href='#'><img src={image1} alt='' /></a></li>
                        <li><a href='#'><img src={image2} alt='' /></a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default AppSection
