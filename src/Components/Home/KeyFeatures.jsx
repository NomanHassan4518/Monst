import React from 'react'

const KeyFeatures = () => {
  return (
    <section id='#key-features' className='mt-32 px-20 '>
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className='lg:w-1/2 py-6'>
          <div class="mb-4">
            <span class="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow " >Why choose us</span>
            <h2 class="text-4xl mt-5 font-bold font-heading " >Key Features</h2>
          </div>
          <div className="py-4 flex items-start ">
            <div className="w-8 text-blue-500 mr-5">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2 font-heading">
              Expand Your Reach
              </h2>
              <p className='leading-loose text-[#94a3b8] text-lg'>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Veritatis expedita animi.</p>
            </div>
          </div>
          <div className="py-4 flex items-start">
            <div className="w-8 text-blue-500 mr-5">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2 font-heading">
              Annualized Growth
              </h2>
              <p className='leading-loose text-[#94a3b8] text-lg'>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Veritatis expedita animi.</p>
            </div>
          </div>
          <div className="py-4 flex items-start">
            <div className="w-8 text-blue-500 mr-5">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2 font-heading">
              Book Your Providers
              </h2>
              <p className='leading-loose text-[#94a3b8] text-lg'>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Veritatis expedita animi.</p>
            </div>
          </div>
        </div>

        <div className='relative lg:w-1/2 '>
          <img className='absolute top-0 left-0 -mt-12 -ml-12 w-40' src="https://monst-nextjs.vercel.app/assets/imgs/elements/blob-tear.svg" alt="" />
          <img className='relative mx-auto w-full z-10 loader' src="https://monst-nextjs.vercel.app/assets/imgs/placeholders/img-1.png" alt="" />
          <img className='absolute bottom-0 right-0 -mr-12 -mb-12 w-40' src="https://monst-nextjs.vercel.app/assets/imgs/elements/blob-tear.svg" alt="" />
        </div>
      </div>
    </section>
  )
}

export default KeyFeatures
