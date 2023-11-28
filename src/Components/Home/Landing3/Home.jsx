import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import { Link } from 'react-scroll';

const Home = () => {
   
  return (
    <div className=''>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
                <div className=' pt-20 xl:px-20 px-4 ' >
                    <div className='max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left'>
                        <h1 className='lg:text-5xl text-3xl font-bold font-heading lineheight  mb-4'>Exclusive Agency For <span className='text-blue-500'>Technology</span> Provide Solution</h1>
                        <div className='text-blueGray-400 text-lg'>
                            <h1>We are <span className='text-blue-500 font-semibold'>Monst</span>, a Creative Design </h1>
                            <p>
                                <Typewriter
                                    words={["Web Agency", "Social Marketing"]}
                                    loop={Infinity}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={400}
                                    deleteSpeed={100}
                                    delaySpeed={4000}

                                />
                            </p>
                            <p className="mt-4 text-[16px]">Helping you maximize operations management with digitization</p>
                        </div>

                        <div className='w-full flex md:flex-row flex-col items-center mt-16 md:space-x-2 md:space-y-0 space-y-5 text-sm '>
                            <button className=' w-full py-3 px-8 rounded font-bold bg-blue-400 hover:bg-blue-500 text-white transition-transform transform hover:translate-y-[-2px] '>
                                <Link className='w-full  py-3 px-8 ' to="/">Key Features</Link>
                            </button>
                            <button className='w-full  py-3 px-8 rounded font-bold border border-gray-200 hover:border-gray-300 bg-white text-blueGray-400 transition-transform transform hover:translate-y-[-2px] duration-500'>
                                <Link
                                    to='work'
                                    className=' '
                                    smooth={true}
                                    offset={50}
                                    duration={3000}
                                >
                                    How we work?
                                </Link>
                            </button>
                          

                        </div>
                    </div>
                </div>

                <div className={` w-full px-5 lg:pt-28 pt-4 pb-16`}>
                    <img src="https://monst-nextjs.vercel.app/assets/imgs/illustrations/work-tv.png" alt="" />
                </div>
            </div>
        </div>
  )
}

export default Home
