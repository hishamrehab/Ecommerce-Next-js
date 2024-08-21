"use client"
import React, { useContext, useState } from 'react'
// ../context/AuthProvider
import { AuthContext } from '../../context/AuthProvider';
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const title = "Register";
const socialTitle = "Login With Social Media";
const btnText = "SignUp";

const SignUp = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const { signUpWithGmail, createUser } = useContext(AuthContext);
    const router = useRouter()




    const handleRegister = () => {
        signUpWithGmail().then((result) => {
            const user = result.user;

            navigate(from, { replace: true })
            router.push('/');

        }).catch((error) => {
            const errorMsg = error.message;
            setErrorMessage("Please Provide Valid email and password");
        })
    }


    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const conformPassword = form.conformPassword.value;

        if (password !== conformPassword) {
            setErrorMessage("Password doesn't match! Please, Provide a correct Password ")
        } else {
            setErrorMessage("");
            createUser(email, password).then((userCredential) => {
                const user = userCredential.user;
                alert("Account created successfully done!!!");
                router.push('/dashboard')
            }).catch((error) => {
                console.log(error.message);
                alert(`${error.message}`)
            }
            )
        }
    }




    return (
        <div className='login-section padding-tb section-bg'>
            <div className='container'>
                <div className="account-wrapper">
                    <h3 className='title'>{title}</h3>
                    <form className='account-form' onSubmit={handleSignup}>

                        <div className='form-group'>
                            <input type='text' name='name' id='name' placeholder='Full Name *' required />
                        </div>

                        <div className='form-group'>
                            <input type='email' name='email' id='email' placeholder='Email Address *' required />
                        </div>



                        <div className='form-group'>
                            <input type='password' name='password' id='password' placeholder='Password *' required />
                        </div>


                        <div className='form-group'>
                            <input type='password' name='conformPassword' id='conformPassword' placeholder='conformPassword *' required />
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
                            <button type='submit' className='d-block lab-btn'>
                                <span>{btnText}</span>
                            </button>

                        </div>
                    </form>

                    {/* account button */}
                    <div className='account-bottom'>
                        <span className='d-block cate pt-10'> Have an account?<Link href="/login">Login</Link></span>
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
    )
}


export default SignUp