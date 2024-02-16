import React from 'react'
import Home from './Home'
import Work from './Work'
import KeyFeatures from './KeyFeatures'
import ContactUs from './ContactUs'
import Team from './Team'

const Landing5 = () => {
  return (
    <div >
      <div>
        <Home/>
      </div>

      <div>
        <Work/>
      </div>

      <div>
        <KeyFeatures/>
      </div>

      <div className='xl:px-20 px-4 py-20'>
      <div className='max-w-2xl mx-auto text-center'>
        <div className='max-w-md mb-8 mx-auto'>
          <p className='text-blueGray-400 mb-4'>Contact us</p>
          <h1 className='lg:text-[36px] text-3xl font-bold font-heading'>
            We will <span className='text-blue-600'>be glad</span> to hear from you!
          </h1>
        </div>
      </div>
        <ContactUs/>
      </div>

      <div>
        <Team/>
      </div>
    </div>
  )
}

export default Landing5
