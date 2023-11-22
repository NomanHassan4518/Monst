import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import { Link} from 'react-scroll';
import Counter from '../Counter';
import KeyFeatures from './Landing1/KeyFeatures';
import HowWork from './Landing1/HowWork';
import Solution from './Landing1/Solution';

const Landing1 = () => {
  return (
    <>
      <div className=' w-[100%] -mt-24 mb-8'>
        <div className="bg-top  w-full bg-contain" style={{ width: "100%", backgroundImage: `url("https://monst-nextjs.vercel.app/assets/imgs/backgrounds/intersect.svg")`, backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat", }}>
          <div className=" mx-auto max-w-screen-xl text-center py-28 ">
            <h1 className="mb-4 mt-8 lg:text-5xl font-heading lineheight  font-bold  text-black text-3xl "> Committed to People <br /> Committed <span className='text-blue-500'>to the Future</span></h1>
            <div className="mb-3  text-sm font-normal text-[#94a3b8] lg:text-xl sm:px-16 lg:px-48">We are <span className='text-blue-500 font-bold'>Monst</span>, a Creative Design</div>
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

            <div className='flex items-center justify-center space-x-2 text-sm mt-3'>
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
          </div>
        </div>
      </div>

      <div className='w-full -mt-32 relative'>
        <img className='w-full' src="https://monst-nextjs.vercel.app/assets/imgs/elements/pattern.png" alt="" />
        <div className='absolute' style={{top:"9%", left:"14%", width:"72%",height:"66%"}}>
          <img className='loader' src="https://monst-nextjs.vercel.app/assets/imgs/placeholders/dashboard.png" alt="" />
        </div>
      </div>

      <div className="mt-16">
        <Counter/>
      </div>

      <div>
        <KeyFeatures/>
      </div>

      <div>
        <HowWork/>
      </div>

      <div>
        <Solution/>
      </div>
    </>


  )
}

export default Landing1
