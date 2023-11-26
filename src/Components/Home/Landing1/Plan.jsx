import React from 'react'
import { Link } from 'react-scroll'

const Plan = () => {
    let plan = [
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/icons/startup.svg",
            name: "Startup",
            price: "$45.99",
            icon: <svg class="w-6 h-6 mr-2 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
            li1: "3 Emails",
            li2: "1 Datebases",
            li3: "Unlimited Domains",
            li4: "10 GB Storage",
        },
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/icons/startup.svg",
            name: "Startup",
            price: "$45.99",
            icon: <svg class="w-6 h-6 mr-2 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
            li1: "3 Emails",
            li2: "1 Datebases",
            li3: "Unlimited Domains",
            li4: "10 GB Storage",
        },
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/icons/startup.svg",
            name: "Startup",
            price: "$45.99",
            icon: <svg class="w-6 h-6 mr-2 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
            li1: "3 Emails",
            li2: "1 Datebases",
            li3: "Unlimited Domains",
            li4: "10 GB Storage",
        },
    ]
    return (
        <>
            <div className='py-20 mt-20 bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url("https://monst-nextjs.vercel.app/assets/imgs/backgrounds/intersect.svg")`, width: "100%", height: "35rem" }}>
                <div className='px-4 mx-auto'>
                    <div className='text-center mb-16'>
                        <h2 className=" mx-auto max-w-lg mb-4 text-4xl font-bold font-heading leading-normal">
                            Start saving time today and <br />
                            <span className='text-blue-500'> choose</span>
                            <span> your best plan</span>
                        </h2>
                        <p className='text-blueGray-400 text-lg'>Best for freelance developers who need to <br /> save their time</p>
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-12 gap-5 md:-mt-44 -mt-20 lg:px-20 px-4">
                {
                    plan.map((item, index) => (
                        <div key={index} className={`pt-16 pb-8 col-span-12 lg:col-span-4 ${index===2?"md:col-span-12":"md:col-span-6"} px-4 text-center rounded shadow-xl transition-transform transform hover:translate-y-[-5px] duration-500 ${index === 1 ? "bg-blue-500 text-white" : "bg-white text-blueGray-400"} `}>
                            <img className='h-20 mb-6 mx-auto' src={item.img} alt="" />
                            <h1 className={`mb-2 text-4xl  font-bold font-heading ${index === 1 ? "text-white" : "text-black"}`}>{item.name}</h1>
                            <h1 className={`mb-2 text-4xl  font-bold font-heading ${index === 1 ? "text-white" : "text-blue-500 "}`}>{item.price}</h1>
                            <p className='text-xl'>user per month</p>
                            <div className='mt-3 flex flex-col items-center mb-8'>
                                <ul className="mt-4 text-lg">
                                    <li className="flex mb-3">
                                        <span className={`${index === 1 ? "text-white" : "text-blueGray-400"}`}>{item.icon}</span>
                                        <span> {item.li1}</span>
                                    </li>
                                    <li className="flex mb-3">
                                        <span className={`${index === 1 ? "text-white" : "text-blueGray-400"}`}>{item.icon}</span>
                                        <span> {item.li2}</span>
                                    </li>
                                    <li className="flex mb-3">
                                        <span className={`${index === 1 ? "text-white" : "text-blueGray-400"}`}>{item.icon}</span>
                                        <span> {item.li3}</span>
                                    </li>
                                    <li className="flex mb-3">
                                        <span className={`${index === 1 ? "text-white" : "text-blueGray-400"}`}>{item.icon}</span>
                                        <span> {item.li4}</span>
                                    </li>

                                </ul>
                            </div>
                            <div className="flex mb-4 items-center justify-center space-x-4">
                                <button>
                                    <Link to='home' className={`py-3 px-4 text-center rounded font-semibold ${index === 1 ? "text-blue-500 bg-white hover:bg-blue-100" : "bg-blue-400 hover:bg-blue-500 text-white"}`}>Start Free Trail</Link>
                                </button>
                                <button>
                                    <Link to='home' className={`py-3 px-4 text-center rounded font-semibold ${index === 1 ? "text-white border border-white hover:border-blue-300" : "border border-gray-400 hover:border-gray-700"}`}>Purchase</Link>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='pt-20 pb-10 lg:my-20 mt-12 bg-top bg-no-repeat ' style={{ backgroundImage: `url("	https://monst-nextjs.vercel.app/assets/imgs/elements/blob.svg")` }}>
                <div className="py-20 px-4 lg:p-20 ">
                    <div className='text-center'>
                        <h1 className="lg:text-4xl text-3xl font-extrabold font-heading leading-normal">
                            Subscribe now to
                            <span className='text-blue-500'> Our</span><br />
                            <span className='text-blue-500'> Newsletters</span> and get the <br />
                            Coupon code.
                        </h1>
                        <p className='mt-4 text-xl text-blueGray-400'>All your information is completely confidential</p>
                    </div>

                    <div className="flex items-center justify-center md:space-x-5 md:space-y-0 space-y-6 md:flex-row flex-col  bg-white p-4 rounded-lg mt-9 max-w-lg mx-auto">
                        <div className="flex bg-[#f1f5f9] rounded px-3 ">
                        <svg class="h-6 w-6 my-auto text-blueGray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                        <input className='w-full bg-[#f1f5f9] border-none focus:ring-0 focus:outline-none  font-semibold text-blueGray-400' type="email" placeholder='Type your e-mail'/>
                        </div>

                        <button className='p-3 px-4 w-full font-semibold text-xl text-white bg-blue-500 rounded'>Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Plan
