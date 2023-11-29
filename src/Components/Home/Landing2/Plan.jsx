import React from 'react'

const Plan = () => {
    return (
        <div className=''>
            <div className='py-20 mt-20 bg-center bg-no-repeat bg-cover' style={{ backgroundImage: `url("https://monst-nextjs.vercel.app/assets/imgs/backgrounds/intersect.svg")`, width: "100%", height: "35rem" }}>
                <div className='px-4 mx-auto'>
                    <div className='text-center mb-16'>
                        <h2 className=" mx-auto max-w-lg mb-4 text-4xl font-bold font-heading leading-normal">
                            Choose Your<br />
                            <span className='text-blue-500'> Best </span>
                            <span> your best plan</span>
                        </h2>
                        <p className='text-blueGray-400 text-lg'>Great Things In Business Are Never Done <br /> By One Personp</p>

                        <div className="mt-8">

                            <div className="flex md:flex-row flex-col items-center justify-center md:space-x-4 space-x-0 md:space-y-0 space-y-5">
                                <div className="flex items-center justify-center">
                                    <input id="link-radio" type="radio" value="" className="w-4 h-4 text-white bg-gray-100 focus:border-none focus:text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 " />
                                    <label for="link-radio" className="ms-4 text-lg font-medium text-gray-900 dark:text-gray-300">Monthly Billing <button className="bg-blue-600 text-white font-bold py-2 px-2 rounded">$59
                                    </button>
                                    </label>
                                </div>

                                <div className="flex items-center justify-center ">
                                    <input id="link-radio" type="radio" value="" className="w-4 h-4 text-white bg-gray-100 focus:border-none focus:text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 " />
                                    <label for="link-radio" className="ms-4 text-lg font-medium text-gray-900 dark:text-gray-300">Annual Billing <button className="bg-blue-600 text-white font-bold py-2 px-2 rounded">$99
                                    </button>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:-mt-44 -mt-16 xl:px-20 px-4 grid grid-cols-12 mb-20'>
                <div className="lg:col-span-5 col-span-12 rounded shadow bg-white py-10 px-12 text-center">
                    <p className='text-lg text-blueGray-400'>Sign In</p>
                    <p className='text-2xl mb-6'>Setup your payment</p>
                    <div className='flex items-center justify-between bg-[#f1f5f9] px-3 rounded'>
                        <input className="w-full py-4 text-xs bg-[#f1f5f9] placeholder-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none border-none focus:ring-0" type="email" placeholder="name@email.com" />
                        <svg className="h-6 w-6 ml-4 my-auto text-[#ccd6e2] cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>
                    </div>
                    <div className='flex items-center justify-between mt-4 bg-[#f1f5f9] px-3 rounded'>
                        <input className="w-full py-4 text-xs bg-[#f1f5f9] placeholder-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none border-none focus:ring-0" type="password" placeholder="Enter your password" />
                        <svg className="h-6 w-6 my-auto text-[#ccd6e2] cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                    </div>

                    <div className="my-6">
                        <div className="flex items-center">
                            <input checked id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-white  focus:text-blue-600  bg-gray-100 border-none rounded focus:ring-0 outline-none " />
                            <label for="checked-checkbox" className="ms-2 text-sm font-medium text-blueGray-400 ">I agree to terms and conditions.</label>
                        </div>
                    </div>

                    <button className="block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" fdprocessedid="3hoqfm">Purchase now</button>
                </div>

                <div className='lg:col-span-7 col-span-12 relative bg-blue-500 shadow  py-10 px-4 rounded-r'>
                    <div className="max-w-sm px-12 pt-2 pb-12">
                        <span className="text-xs text-blue-200">Various Analysis Options</span>
                        <h3 className="mb-4 text-4xl font-bold font-heading text-white leading-normal">Techno Provides Realtime Best Data Solutions.</h3>
                        </div>

                        <div className='absolute right-0 bottom-0'>
                            <img className='h-80' src="https://monst-nextjs.vercel.app/assets/imgs/illustrations/online-shopping.png" alt="" />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Plan
