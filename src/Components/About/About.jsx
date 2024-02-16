import React from 'react'
import Home from './Home'
import Counter from '../Counter'
import HowWork from '../Home/Landing1/HowWork'
import ContactUs from '../Home/Landing5/ContactUs'
import Specialists from './Specialists'
import Subcribe from '../Subcribe'

const About = () => {

  return (
    <div className="mb-8 -mt-24">
      <div>
        <Home />
      </div>

      <div>
        <Counter />
      </div>

      <div>
        <HowWork />
      </div>

      <div className='xl:px-20 px-4 py-20'>
        <Specialists />
      </div>

      <div className='xl:px-20 px-4 py-20'>
        <div className='max-w-2xl mx-auto text-center'>
          <div className='max-w-md mb-8 mx-auto'>
            <p className='py-1 inline-block px-3 mb-4 font-semibold text-blue-700 bg-blue-100 rounded-xl text-sm '>Contact us</p>
            <h1 className='lg:text-[36px] text-3xl font-bold font-heading'>
              We will <span className='text-blue-600'>be glad</span> to hear from you!
            </h1>
          </div>
        </div>
        <ContactUs />
      </div>

      <div>
        <Subcribe />
      </div>

    </div>
  )
}

export default About
