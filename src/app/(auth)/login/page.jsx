"use client"
import React, { useContext, useState } from 'react'
// ../context/AuthProvider
import { AuthContext } from '../../context/AuthProvider';
import { useRouter } from 'next/navigation'

import Link from 'next/link'



const title = "Login";
const socialTitle = "Login With Social Media";
const btnText = "Login Now";

const socialList = [
    { link: "#", iconName: "icofont-facebook", className: "facebook", },
    { link: "#", iconName: "icofont-twitter", className: "twitter", },
    { link: "#", iconName: "icofont-linkedin", className: "linkedin", },
    { link: "#", iconName: "icofont-instagram", className: "instagram", },
    { link: "#", iconName: "icofont-pinterest", className: "pinterest", },
];

const Login = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const { signUpWithGmail, login } = useContext(AuthContext);

    const router = useRouter()


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password).then((result) => {
            const user = result.user;
            alert("Login successful!");
            router.push('/')
        }).catch((error) => {
            const errorMsg = error.message;
            setErrorMessage("Please Provide Valid email and password");
        })
    }


    const handleRegister = () => {
        signUpWithGmail().then((result) => {
            const user = result.user;
            router.push('/')
        }).catch((error) => {
            const errorMsg = error.message;
            setErrorMessage("Please Provide Valid email and password");
        })
    }


    return (
        <div>
            <div className='login-section padding-tb section-bg'>
                <div className='container'>
                    <div className="account-wrapper">
                        <h3 className='title'>{title}</h3>
                        <form className='account-form' onSubmit={handleLogin}>
                            <div className='form-group'>
                                <input type='email' name='email' id='email' placeholder='Email Address *' required />
                            </div>
                            <div className='form-group'>
                                <input type='password' name='password' id='password' placeholder='Password *' required />
                            </div>
                            {/* showing message */}
                            <div>
                                {errorMessage && (
                                    <div className='error-message text-danger mb-1' >
                                        {errorMessage}
                                    </div>
                                )}
                            </div>
                            <div className='form-group'>
                                <div className='d-flex justify-content-between flex-wrap pt-sm-2'>
                                    <div className='checkgroup'>
                                        <input type='checkbox' name='remember' id='remember' />
                                        <label href="remember">Remember me</label>
                                    </div>
                                    <Link href="/forgetpass">Forget Password </Link>
                                </div>
                            </div>
                            <div className='form-group'>
                                <button type='submit' className='d-block lab-btn'>
                                    <span>{btnText}</span>
                                </button>

                            </div>
                        </form>

                        {/* account button */}
                        <div className='account-bottom'>
                            <span className='d-block cate pt-10'>Do not have an account?<Link href="/sign-up">Sign Up</Link></span>
                            <span className='or'>
                                <span>Or</span>
                            </span>

                            {/* social login*/}

                            <h5 className='subtitle'>{socialTitle}</h5>
                            <ul className='lab-ul social-icons justify-content-center'>
                                <li>
                                    <button className='github' onClick={handleRegister}>
                                        <i className='icofont-github'></i>
                                    </button>
                                </li>

                                <li>
                                    <a href='/' className='facebook'>
                                        <i className='icofont-facebook'></i>
                                    </a>
                                </li>


                                <li>
                                    <a href='/' className='twitter'>
                                        <i className='icofont-twitter'></i>
                                    </a>
                                </li>



                                <li>
                                    <a href='/' className='linkedin'>
                                        <i className='icofont-linkedin'></i>
                                    </a>
                                </li>

                                <li>
                                    <a href='/' className='github'>
                                        <i className='icofont-github'></i>
                                    </a>
                                </li>

                                <li>
                                    <a href='/' className='instagram'>
                                        <i className='icofont-instagram'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login