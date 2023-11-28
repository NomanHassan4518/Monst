import { Drawer } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { BsPlus } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
    const [navbarColor, setNavbarColor] = useState('transparent');
    const [isOpen, setIsOpen] = useState(false);
    const [dropdown, setDropDown]=useState("hidden")

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

    let drawerOpen=()=>{
        setIsOpen(true)
    }

    let drawerClose=()=>{
        setIsOpen(false)
        setDropDown("hidden")
    }

    let showDropdown=()=>{
        if(dropdown==="hidden"){
            setDropDown("block")
        } else{
            setDropDown("hidden")
        }
    }

    let title=<img className='h-10  absolute left-3 top-1' src='https://monst-nextjs.vercel.app/assets/imgs/logos/monst-logo.svg' alt=''></img>

    return (
        <div className={` mt-4  w-full xl:px-24 py-5 px-4 ${navbarColor} `}>

            <div className='flex justify-between items-center'>
                <Link to="/">
                    <img className='h-10 ' src="https://monst-nextjs.vercel.app/assets/imgs/logos/monst-logo.svg" alt="" />
                </Link>

                <div className='hidden lg:block'>
                    <nav>
                        <div className="container mx-auto flex justify-between items-center">
                            <ul className="flex space-x-10">
                                <li className="relative group">
                                    <Link to='/' className="text-[17px] font-semibold text-[#475569] hover:text-[#616e80]">Home •</Link>
                                    <div className="absolute hidden  py-4 w-[12rem] transition-transform transform translate-y-[12px] group-hover:translate-y-0 duration-1000 group-hover:block ">
                                        <ul className='border border-gray-200 bg-white rounded-lg space-y-4 text-gray-400 px-5 py-2 '>
                                            <li className="">
                                                <Link to="/" className='mt-4'>Landing Page 1</Link>
                                            </li>

                                            <li className="">
                                                <Link to="/index-2">Landing Page 2</Link>
                                            </li>
                                            <li className="">
                                                <Link to="/index-3">Landing Page 3</Link>
                                            </li>
                                            <li className="">
                                                <Link to="/index-4">Landing Page 4</Link>
                                            </li>
                                            <li className="">
                                                <Link to="/">Landing Page 5</Link>
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

                <div className='hidden lg:flex items-center space-x-3 '>
                    <button className="text-[#4286f6] text-sm font-semibold border border-[#bfdbfe] hover:border-[#b4ebff] py-2 px-5 rounded transition-transform transform hover:translate-y-[-2px]">
                        <Link to='/' className='btn-accent'>Log In</Link>
                    </button>
                    <button className="text-white bg-[#60a5fa] hover:bg-[#0a8efa] text-sm font-semibold  py-2 px-5 rounded transition-transform transform hover:translate-y-[-2px]">
                        <Link to='/' className='btn-accent'>Sign Up</Link>
                    </button>
                </div>

                <div className="lg:hidden">
                    <button className=" flex items-center py-2 px-3 text-blue-500 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300" onClick={drawerOpen}>
                        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Mobile menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
                    </button>
                </div>
            </div>

            <Drawer
                title={title}
                open={isOpen}
                onClose={drawerClose}
                placement='left'
                width={300}
            >
                <div className="px-5 text-lg font-light text-[#64748b]">
                    <ul className='space-y-7'>
                        <li className="flex justify-between items-center ">
                            <Link to="/" onClick={drawerClose}>Home</Link>
                            <button className='mt-1' onClick={showDropdown}>{
                                dropdown==="hidden"?<BsPlus />: <IoIosClose />
                            }</button>
                        </li>

                        <ul className={`${dropdown} px-4 space-y-4 marker:`}>
                            <li><Link to="/index-2" onClick={drawerClose}>Home 1</Link></li>
                            <li><Link to="/index-3" onClick={drawerClose}>Home 2</Link></li>
                            <li><Link to="/index-4" onClick={drawerClose}>Home 3</Link></li>
                            <li>Home 4</li>
                            <li>Home 5</li>
                        </ul>

                        <li>
                            <Link to="">About Us</Link>
                        </li>

                        <li>
                            <Link to="">Services</Link>
                        </li>

                        <li>
                            <Link to="">Portfolio</Link>
                        </li>

                        <li>
                            <Link to="">Pricing</Link>
                        </li>

                        <li>
                            <Link to="">Team</Link>
                        </li>

                        <li className="flex justify-between items-center ">
                            <Link to="/">Blog</Link>
                            <button className='mt-1' onClick={showDropdown}>{
                                dropdown==="hidden"?<BsPlus />: <IoIosClose />
                            }</button>
                        </li>

                        <ul className={`${dropdown} px-4 space-y-4`}>
                            <li>Category 1</li>
                            <li>Category 2</li>
                            <li>Single 1</li>
                            <li>Single 2</li>
                        </ul>

                        <li>
                            <Link to="">Faqs</Link>
                        </li>

                        <li>
                            <Link to="">Testimonial</Link>
                        </li>

                        <li>
                            <Link to="">Contact Us</Link>
                        </li>
                    </ul>
                </div>

                <div className="mt-7 pt-6 border-t border-blueGray-100">
                    <Link className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 text-white rounded" to="/signup">Sign Up</Link>
                    <Link className="block px-4 py-3 mb-2 text-xs text-center text-blue-500 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded" to="/login">Log In</Link>
                    </div>

                    <div className="mt-auto">
                        <p className="my-4 text-xs text-blueGray-400">
                            <span>Get in Touch</span>
                            <span className="text-blue-500 hover:text-blue-500 underline">contact@monst.com</span>
                            </p>
                            <Link className="inline-block px-1" to="https://facebook.com">
                                <img src="	https://monst-nextjs.vercel.app/assets/imgs/icons/facebook-blue.svg" alt="Monst"/>
                                </Link>
                                <Link className="inline-block px-1" to="https://twitter.com">
                                    <img src="https://monst-nextjs.vercel.app/assets/imgs/icons/twitter-blue.svg" alt="Monst"/>
                                    </Link>
                                    <Link className="inline-block px-1" to="https://www.instagram.com">
                                        <img src="https://monst-nextjs.vercel.app/assets/imgs/icons/instagram-blue.svg" alt="Monst"/>
                                    </Link>
                                    </div>
            </Drawer>
        </div>

    )
}

export default Navbar
