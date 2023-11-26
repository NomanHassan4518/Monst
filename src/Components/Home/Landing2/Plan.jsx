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

                        <div className="mt-6">

                            <div className="flex items-center justify-center space-x-4">
                                <div class="flex items-center justify-center">
                                    <input id="link-radio" type="radio" value="" class="w-4 h-4 text-white bg-gray-100 focus:border-none focus:text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 " />
                                    <label for="link-radio" class="ms-4 text-lg font-medium text-gray-900 dark:text-gray-300">Monthly Billing <button class="bg-blue-600 text-white font-bold py-2 px-2 rounded">$59
                                    </button>
                                    </label>
                                </div>

                                <div class="flex items-center justify-center mt-7">
                                    <input id="link-radio" type="radio" value="" class="w-4 h-4 text-white bg-gray-100 focus:border-none focus:text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 " />
                                    <label for="link-radio" class="ms-4 text-lg font-medium text-gray-900 dark:text-gray-300">Annual Billing <button class="bg-blue-600 text-white font-bold py-2 px-2 rounded">$99
                                    </button>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='-mt-44 xl:px-20 px-4 grid grid-cols-12 mb-20'>
                <div className="col-span-5 rounded shadow bg-white py-10 px-12 text-center">
                    <p className='text-lg text-blueGray-400'>Sign In</p>
                    <p className='text-2xl mb-6'>Setup your payment</p>
                    <div className='flex items-center justify-between bg-[#f1f5f9] px-3 rounded'>
                        <input class="w-full py-4 text-xs bg-[#f1f5f9] placeholder-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none border-none focus:ring-0" type="email" placeholder="name@email.com" />
                        <svg class="h-6 w-6 ml-4 my-auto text-[#ccd6e2] cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>
                    </div>
                    <div className='flex items-center justify-between mt-4 bg-[#f1f5f9] px-3 rounded'>
                        <input class="w-full py-4 text-xs bg-[#f1f5f9] placeholder-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none border-none focus:ring-0" type="password" placeholder="Enter your password" />
                        <svg class="h-6 w-6 my-auto text-[#ccd6e2] cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                    </div>

                    <div className="my-6">
                        <div class="flex items-center">
                            <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-white  focus:text-blue-600  bg-gray-100 border-none rounded focus:ring-0 outline-none " />
                            <label for="checked-checkbox" class="ms-2 text-sm font-medium text-blueGray-400 ">I agree to terms and conditions.</label>
                        </div>
                    </div>

                    <button class="block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" fdprocessedid="3hoqfm">Purchase now</button>
                </div>

                <div className='col-span-7 relative bg-blue-500 shadow  py-10 px-4 rounded-r'>
                    <div class="max-w-sm px-12 pt-2 pb-12">
                        <span class="text-xs text-blue-200">Various Analysis Options</span>
                        <h3 class="mb-4 text-4xl font-bold font-heading text-white leading-normal">Techno Provides Realtime Best Data Solutions.</h3>
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
