import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import { Link} from 'react-scroll';

const Home = () => {
  return (
    <div>
       <div className=' w-[100%] -mt-24 mb-8'>
        <div className="bg-top  w-full bg-contain " style={{ width: "100%", backgroundImage: `url("	https://monst-nextjs.vercel.app/assets/imgs/placeholders/img-15.jpg")`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat", }}>
          <div className=" mx-auto max-w-screen-xl text-center pt-28 pb-8 ">
            <h1 className="mb-4 mt-8 lg:text-5xl font-heading  lineheight font-bold  text-white text-3xl "> Committed to People <br /> Committed <span className='text-blue-500'>to the Future</span></h1>
            <div className="mb-3  text-lg font-normal text-[#94a3b8] lg:text-xl sm:px-16 lg:px-48">We are <span className='text-blue-500 font-bold'>Monst</span>, a Creative Design</div>
            <div className="text-[#94a3b8] text-lg mb-8">
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

            <div className='flex md:flex-row flex-col items-center justify-center space-x-2 md:space-y-0 space-y-10 text-sm mt-12'>
              <button className=' transition-transform transform hover:translate-y-[-2px]'>
                <Link
                  to='key-features'
                  className='py-3 px-8 rounded font-bold bg-blue-500 hover:bg-blue-700 text-white'
                  smooth={true}
                  offset={10}
                  duration={3000}
                >
                  Key Features
                </Link>
              </button>
              <button className='transition-transform transform hover:translate-y-[-2px]'>
                <Link
                  to='work'
                  className='py-3 px-8 rounded font-bold bg-white text-black '
                  smooth={true}
                  offset={50}
                  duration={3000}
                >
                  How we work?
                </Link>
              </button>

            </div>

            <div className='pt-32 mx-auto xl:px-32 px-5 '>
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
