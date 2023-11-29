import React from 'react'

const Business = () => {
  let  business = [
        {
            icon: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>,
            name: "IT Consultancy",
            desc: "We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success."
        },
        {
            icon: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>,
            name: "Web Development",
            desc: "We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success."
        },
        {
            icon: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>,
            name: "App Development",
            desc: "We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success."
        },
        {
            icon: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>,
            name: "Digital Marketing",
            desc: "We believe brand interaction is key to communication. Real innovations and positive customer experience are the heart of success."
        },
    ]
    return (
        <div className='xl:px-20 px-4 py-20'>
            <div className="grid lg:grid-cols-2 grid-cols-1">
                <div className='max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left lg:pr-12'>
                    <h1 className='lg:text-4xl text-3xl font-bold font-heading lineheight1'>Saas Solutions for
                        <span className="text-blue-500"> your Business</span> Grow
                        on time</h1>
                </div>

                <div>
                    <p className='lg:pl-16 text-blueGray-400 text-lg leading-loose text-center lg:text-start'>Business solution company sit our any how site used the our company any site us it-solve theme is very professional theme business & corporate, finance, advisor, solution, company and all project used, there are all kinds of websites here.</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-12 lg:mt-5">
                {
                    business.map((Item, index) => (
                        <div key={index} className='rounded pt-12 pb-8 px-3 text-center space-y-3 border border-gray-200 hover:shadow-md'>
                            <p className='text-blue-500'>{Item.icon}</p>
                            <p className='font-bold'>{Item.name}</p>
                            <p className='text-blueGray-400'>{Item.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Business
