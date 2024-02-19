import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div className='w-full -mt-24  '>
            <div className="bg-top  w-full bg-contain " style={{ width: "100%", backgroundImage: `url("https://monst-nextjs.vercel.app/assets/imgs/backgrounds/intersect.svg")`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }}>
                <div className=' text-center   py-10 '>
                    <div className='hidden md:block absolute top-0 left-0 mt-32 '>
                        <img className='h-64 lg:h-80 loader' src="https://monst-nextjs.vercel.app/assets/imgs/illustrations/at_the_park.svg" alt="" />
                    </div>
                    <div className='hidden md:block absolute right-0 top-0 mt-32'>
                        <img className='h-64 lg:h-80 loader' src="https://monst-nextjs.vercel.app/assets/imgs/illustrations/delivered.svg" alt="" />
                    </div>

                    <div className='mt-24 flex items-center justify-center flex-col text-center'>
                        <p className='text-blue-500 font-semibold bg-blue-200 rounded-full py-1 px-3'>NEW EVENT</p>
                        <h1 className='mt-4 font-bold font-heading lg:text-5xl text-3xl lineheight'>
                            Exclusive <span className='text-blue-500'>Agency </span> for <br /> technology solution.
                        </h1>

                        <div className="mt-4 lg:flex-row flex-col flex items-center lg:space-x-3 justify-center">
                            <div className=" text-lg font-normal text-[#94a3b8] lg:text-xl ">We are <span className='text-blue-500 font-bold'>Monst</span>, a Creative Design </div>
                            <div className="text-[#94a3b8] text-lg ">
                                <h1 style={{ margin: "auto 0", fontWeight: "normal" }}>
                                    <Typewriter
                                        words={["Web Agency", "Social Marketing"]}
                                        loop={Infinity}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={400}
                                        deleteSpeed={100}
                                        delaySpeed={4000}

                                    />
                                </h1>
                            </div>
                        </div>

                        <div class="flex flex-wrap mt-7 items-center justify-center px-3 md:space-y-0 space-y-5">
                            <div className="flex flex-1 mr-4 px-4 rounded bg-[#f8fafc]">
                                <svg class="h-6 w-6 my-auto mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                <input className='bg-[#f8fafc] border-none outline-none focus:ring-0' type="email" placeholder='Type your e-mail ' />
                            </div>
                            <div className="flex flex-1 mr-4 px-4 rounded bg-[#f8fafc]">
                                <svg class="h-6 w-6 my-auto mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                <input className='bg-[#f8fafc] border-none outline-none focus:ring-0' type="password" placeholder='Password ' />
                            </div>

                            <div class="w-full lg:w-auto  ">
                                <Link class="block w-full py-4 px-6  md:mt-5 lg:mt-0 lg:w-auto text-xs text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded" to="/">
                                    Register</Link>
                            </div>
                        </div>

                        <div className='pt-16 mx-auto xl:px-32 px-5 '>
                            <div className='flex flex-row flex-wrap items-center justify-center'>
                                <div className='w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 '>
                                    <img src="	https://monst-nextjs.vercel.app/assets/imgs/logos/brands/brand-1.png" alt="" />
                                </div>
                                <div className='w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 '>
                                    <img src="	https://monst-nextjs.vercel.app/assets/imgs/logos/brands/brand-2.png" alt="" />
                                </div>
                                <div className='w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 '>
                                    <img src="	https://monst-nextjs.vercel.app/assets/imgs/logos/brands/brand-3.png" alt="" />
                                </div>
                                <div className='w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 '>
                                    <img src="	https://monst-nextjs.vercel.app/assets/imgs/logos/brands/brand-4.png" alt="" />
                                </div>
                                <div className='w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 '>
                                    <img src="	https://monst-nextjs.vercel.app/assets/imgs/logos/brands/brand-5.png" alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
