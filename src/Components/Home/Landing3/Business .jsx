import React from 'react'

const Plan = () => {
  let  business = [
    {
        icon: <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>,
        name: "IT Consultancy",
        desc: "We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success."
    },
    {
        icon: <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>,
        name: "Web Development",
        desc: "We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success."
    },
    {
        icon: <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>,
        name: "App Development",
        desc: "We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success."
    },
    {
        icon: <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>,
        name: "Digital Marketing",
        desc: "We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success."
    },
    {
      icon:<svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>,
      name:"Right Solutions",
      desc:"We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success."
    },
    {
      icon:<svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>,
      name:"Responsive Site",
      desc:"We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success."
    },
    {
      icon:<svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>,
      name:"Clean Design",
      desc:"We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success."
    },
    {
      icon:<svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>,
      name:"Process Research",
      desc:"We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success."
    },
]
  return (
    <div>
      <div className='py-20 mt-20 bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url("https://monst-nextjs.vercel.app/assets/imgs/backgrounds/intersect.svg")`, width: "100%", height: "35rem" }}>
        <div className='px-4 mx-auto'>
          <div className='text-center mb-16'>
            <h2 className=" mx-auto max-w-lg mb-4 text-4xl font-bold font-heading leading-normal">
              We Consultant to Get<br />
              <span className='text-blue-500'> Our Business </span>
              <span> Plan</span>
            </h2>
            <p className='text-blueGray-400 text-lg'>Business solution company sit our any how site used the our <br /> company any site us it-solve theme is very professional</p>


          </div>
        </div>
      </div>

      <div className='lg:-mt-44 -mt-16 xl:px-20 px-4  mb-20'>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-12 lg:mt-5">
                {
                    business.map((Item, index) => (
                        <div key={index} className='rounded bg-white pt-12 pb-8 px-3 text-center space-y-3 border border-gray-200 hover:shadow-md'>
                            <p className='text-blue-500'>{Item.icon}</p>
                            <p className='font-bold'>{Item.name}</p>
                            <p className='text-blueGray-400'>{Item.desc}</p>
                        </div>
                    ))
                }
            </div>
            </div>

    </div>
  )
}

export default Plan
