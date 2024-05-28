
import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react'

import Home1 from '../../assets/HomeImg.svg';
import { Link, NavLink } from 'react-router-dom'

import CartLogo from '../../assets/Shopping.svg'

import 'aos/dist/aos.css';
import AOS from 'aos';






const App = () => {

    const { user, isAuthenticated } = useAuth0()

    useEffect(() => {

        AOS.init({

            // Initialize AOS with options here if needed
            // duration: 1000,
            // easing: 'ease-in-out',
            duration: 800,
            easing: 'ease-in-out',

        });

    }, []);

    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center h-screen mt-5">
                {/* Left side (image) */}
                <div className="w-full md:w-1/2 p-4 ">

                    <img
                        src={Home1}
                        alt="E-commerce"
                        className="mx-auto md:mx-0 rounded-lg "
                        data-aos="fade-right" data-aos-delay="500"
                    />
                </div>
                {/* Right side (text) */}
                <div className="w-full md:w-1/2 p-4 md:mb-44">
                    <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-10" data-aos="fade-down" data-aos-delay="500">
                        Welcome To Our E-Commerce
                        {
                            isAuthenticated && <p className='text-orange-700 hover:underline'> {user.name}</p>

                        }

                    </h1>
                    <p className="text-lg text-center md:text-left" data-aos="fade-down" data-aos-delay="500" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec
                        justo vel libero vehicula maximus.<br />

                        {/* <button className='p-3 mt-4 bg-orange-500 rounded-2xl text-2xl shadow-xl'> Explure Our Cart </button> */}

                        <button>
                            <NavLink
                                to="/shopping"
                                className={({ isActive }) =>
                                    `flex   duration-200 ${isActive ? "text-orange-700" : ""} p-3 mt-4  rounded-2xl bg-orange-200 text-2xl shadow-xl text-orange-800 hover:text-orange-900`
                                }
                                data-aos="fade-up" data-aos-delay="500"
                            >
                                Explure Our Cart
                                <img src={CartLogo} className='w-10 h-10 ml-2' />
                            </NavLink>
                        </button>
                    </p>

                </div>
            </div>

            {/* <carousel /> */}
        </>
    );
};

export default App;
