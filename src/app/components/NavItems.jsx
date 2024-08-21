"use client"
import { useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AuthContext } from '../context/AuthProvider';
import logo from "../../../public/images/logo/logo.png"

const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);


    const { user } = useContext(AuthContext);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setHeaderFixed(true);
            } else {
                setHeaderFixed(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>

            {!user && (
                <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
                    <div className='container'>
                        <div className='header-top-area'>
                            <Link href="/sign-up" className='lab-btn me-3'><span>Create Account</span></Link>
                            <Link href="/login">Log in</Link>
                        </div>
                    </div>
                </div>
            )}




            <div className='header-bottom'>
                <div className='container'>
                    <div className='header-wrapper'>

                        <div className='logo-search-acte'>
                            <div className='logo'>
                                <Link href={"/"}>
                                    <Image src={logo} alt='' width={200} height={200} />
                                </Link>
                            </div>
                        </div>



                        <div className='menu-area'>
                            <div className='menu'>
                                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/shop">Shop</Link></li>
                                    <li><Link href="/blog">Blog</Link></li>
                                    <li><Link href="/about">About</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                    <li><Link href="/cart">Cart</Link></li>


                                </ul>
                            </div>



                            {user ? user.email
                                : (
                                    <>
                                        <Link href="/sign-up" className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                                        <Link href="/login" className='d-none d-md-block'>Login</Link>
                                    </>
                                )}



                            <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className='ellepsis-bar d-md-none' onClick={() => setSocialToggle(!socialToggle)}><i className="icofont-info-square"></i></div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default NavItems;
