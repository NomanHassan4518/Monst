import React from 'react'

const KeyFeatures = () => {
  return (
    <section id='key-features' className='mt-32 lg:pl-20 lg:pr-12 px-4 '>
    <div className="flex flex-wrap lg:flex-nowrap space-x-0 lg:space-x-16">
     

      <div className=' flex flex-wrap lg:max-w-sm mx-auto'>
      <img className='loader' src="https://monst-nextjs.vercel.app/assets/imgs/illustrations/tasks.svg" alt="" />
      </div>
   

    <div className='lg:w-5/6 lg:mt-0 mt-12 '>
        <div className="mb-4">
          <span className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow " >Why choose us</span>
          <h2 className="text-4xl mt-5 font-bold font-heading " >Key Features</h2>
        </div>
        <div className="py-7 flex items-start ">
          <div className="w-8 text-blue-500 mr-5">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 font-heading">
            Expand Your Reach
            </h2>
            <p className='leading-loose text-[#94a3b8] text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
          </div>
        </div>
        <div className="py-7 flex items-start">
          <div className="w-8 text-blue-500 mr-5">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 font-heading">
            Annualized Growth
            </h2>
            <p className='leading-loose text-[#94a3b8] text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
          </div>
        </div>
        <div className="py-4 flex items-start">
          <div className="w-8 text-blue-500 mr-5">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 font-heading">
            Book Your Providers
            </h2>
            <p className='leading-loose text-[#94a3b8] text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
          </div>
        </div>
      </div>
      </div>
  </section>
  )
}

export default KeyFeatures
