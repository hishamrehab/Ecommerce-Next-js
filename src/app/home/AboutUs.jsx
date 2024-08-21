
"use client"
import CountUp from 'react-countup';
const subTitle = "Why Choose Us";
const title = "Become a Marchant";
const desc = "Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn";
const btnText = "Apply Now";

// import image from "../../../public/images/instructor/01.jpg"
import Link from 'next/link';
import Image from 'next/image';
const countList = [
    {
        iconName: 'icofont-users-alt-4',
        count: '12600',
        text: 'Marchant Enrolled',
    },
    {
        iconName: 'icofont-graduate-alt',
        count: '30',
        text: 'Certified Courses',
    },
    {
        iconName: 'icofont-notification',
        count: '100',
        text: 'Rewards and GitCards',
    },
]


const AboutUs = () => {
    return (
        <div className='instructor-section style-2 padding-tb section-bg-ash'>
            <div className='container'>
                <div className='section-wrapper'>
                    <div className='row g-4 justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-xl-3 '>
                        <div className='col'>
                            {countList.map((val, i) => (
                                <div key={i} className='count-item'>
                                    <div className='count-inner'>
                                        <div className='count-icon'>
                                            <i className={val.iconName}></i>
                                        </div>
                                        <div className='count-content'>
                                            <h2>
                                                <span className='count'><CountUp end={val.count} /></span>
                                                <span> + </span>
                                            </h2>
                                            <p>{val.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='col'>
                            <div className='instructor-content'>
                                <h5 className='subtitle'>{subTitle}</h5>
                                <h2 className='title'>{title}</h2>
                                <p>{desc}</p>
                                <Link href="/sign-up" className='lab-btn'>{btnText}</Link>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='instructor-thumb'>
                                <Image src="/images/instructor/01.png" alt='' width={500} height={500} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs


































