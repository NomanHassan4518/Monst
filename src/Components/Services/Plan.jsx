import React from 'react'
import { Link } from 'react-router-dom'

const Plan = () => {
    let plan = [
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/icons/startup.svg",
            name: "Startup",
            price: "$45.99",
            icon: <svg className="w-6 h-6 mr-2 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
            li1: "3 Emails",
            li2: "1 Datebases",
            li3: "Unlimited Domains",
            li4: "10 GB Storage",
        },
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/icons/startup.svg",
            name: "Startup",
            price: "$45.99",
            icon: <svg className="w-6 h-6 mr-2 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
            li1: "3 Emails",
            li2: "1 Datebases",
            li3: "Unlimited Domains",
            li4: "10 GB Storage",
        },
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/icons/startup.svg",
            name: "Startup",
            price: "$45.99",
            icon: <svg className="w-6 h-6 mr-2 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
            li1: "3 Emails",
            li2: "1 Datebases",
            li3: "Unlimited Domains",
            li4: "10 GB Storage",
        },
    ]
    return (
        <div>
            <div className=' mx-auto mt-20'>
                <div className="text-center mb-16">
                    <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading lineheight2">
                        <span>Start saving time today and</span>
                        <span className="text-blue-500"> choose </span>
                        <span>your best plan</span>
                    </h2>
                    <p className="max-w-sm mx-auto text-xl text-blueGray-400 ">Best for freelance developers who need to save their time</p>
                </div>

                <div className="grid grid-cols-12 gap-5 mt-20 lg:px-20 px-4">
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
            </div>
        </div>
    )
}

export default Plan
