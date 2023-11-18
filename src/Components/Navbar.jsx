import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [navbarColor, setNavbarColor] = useState('transparent');

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        if (currentScrollPos > 20) {
          setNavbarColor(` navbar`);
        } else {
          setNavbarColor(' navbar1');
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (

        <div className={` mt-4  w-full lg:px-24 py-5 ${navbarColor} `}>
           
                    <div className='flex justify-between items-center'>
                        <div>
                            <img className='h-10' src="https://monst-nextjs.vercel.app/assets/imgs/logos/monst-logo.svg" alt="" />
                        </div>

                        <div>
                            <nav>
                                <div className="container mx-auto flex justify-between items-center">
                                    <ul className="flex space-x-10">
                                        <li className="relative group">
                                            <Link to='/' className="text-[17px] font-semibold text-[#475569] hover:text-[#616e80]">Home •</Link>
                                            <div className="absolute hidden group-hover:block  py-4 w-[12rem]">
                                                <ul className='border border-gray-200 bg-white rounded-lg space-y-4 text-gray-400 px-5 py-2 '>
                                                    <li className="">
                                                        <Link to="/" className='mt-4'>Landing Page 1</Link>
                                                    </li>
                                                    <li className="">
                                                        <Link to="/">Landing Page 1</Link>
                                                    </li>
                                                    <li className="">
                                                        <Link to="/">Landing Page 1</Link>
                                                    </li>
                                                    <li className="">
                                                        <Link to="/">Landing Page 1</Link>
                                                    </li>
                                                    <li className="">
                                                        <Link to="/">Landing Page 1</Link>
                                                    </li>

                                                </ul>
                                            </div>
                                        </li>

                                        <li>
                                            <Link to='/' className="text-[17px] font-semibold text-[#475569] hover:text-[#616e80]">About Us</Link>
                                        </li>


                                        <li>
                                            <Link to='/' className="text-[17px] font-semibold text-[#475569] hover:text-[#616e80]">Services</Link>
                                        </li>


                                        <li className='relative group'>
                                            <Link to='/' className="text-[17px] font-semibold text-[#475569] hover:text-[#616e80]">Company •</Link>
                                            <div className="absolute hidden group-hover:block  py-4 w-[12rem]">
                                                <ul className='border border-gray-200 bg-white rounded-lg space-y-4 text-gray-400 px-5 py-2 '>
                                                    <li className="">
                                                        <Link to="/" className='mt-4'>Landing Page 1</Link>
                                                    </li>
                                                    <li className="">
                                                        <Link to="/">Landing Page 1</Link>
                                                    </li>
                                                    <li className="">
                                                        <Link to="/">Landing Page 1</Link>
                                                    </li>
                                                    <li className="">
                                                        <Link to="/">Landing Page 1</Link>
                                                    </li>
                                                    <li className="">
                                                        <Link to="/">Landing Page 1</Link>
                                                    </li>

                                                </ul>
                                            </div>
                                        </li>


                                        <li className='relative group'>
                                            <Link to='/' className="text-[17px] font-semibold text-[#475569] hover:text-[#616e80]">Blog •</Link>
                                            <div className="absolute hidden group-hover:block  py-4 w-[12rem]">
                                                <ul className='border border-gray-200 bg-white rounded-lg space-y-4 text-gray-400 px-5 py-2 '>
                                                    <li className="">
                                                        <Link to="/" className='mt-4'>Landing Page 1</Link>
                                                    </li>
                                                    <li className="">
                                                        <Link to="/">Landing Page 1</Link>
                                                    </li>
                                                    <li className="">
                                                        <Link to="/">Landing Page 1</Link>
                                                    </li>
                                                    <li className="">
                                                        <Link to="/">Landing Page 1</Link>
                                                    </li>
                                                    <li className="">
                                                        <Link to="/">Landing Page 1</Link>
                                                    </li>

                                                </ul>
                                            </div>
                                        </li>

                                        <li>
                                            <Link to='/' className="text-[17px] font-semibold text-[#475569] hover:text-[#616e80]">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>

                        <div className='flex items-center space-x-3'>
                            <button className="text-[#4286f6] text-sm font-semibold border border-[#bfdbfe] hover:border-[#b4ebff] py-2 px-5 rounded transition-transform transform hover:translate-y-[-2px]">
                                <Link to='/' className='btn-accent'>Log In</Link>
                            </button>
                            <button className="text-white bg-[#60a5fa] hover:bg-[#0a8efa] text-sm font-semibold  py-2 px-5 rounded transition-transform transform hover:translate-y-[-2px]">
                                <Link to='/' className='btn-accent'>Sign Up</Link>
                            </button>
                        </div>
                    </div>
                </div>
         
    )
}

export default Navbar
