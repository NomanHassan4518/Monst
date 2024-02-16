import React from 'react'

const Providing = () => {
    return (
        <div className=' xl:px-20 px-4 flex flex-wrap'>
            <div className='w-full md:w-1/2 pr-12 px-3 order-0 md:mb-0'>
                <img className='sm:max-w-sm lg:max-w-full mx-auto' src="https://monst-nextjs.vercel.app/assets/imgs/placeholders/img-6.jpg" alt="" />
            </div>

            <div className='order-1 w-full md:w-1/2 pr-3 mt-6'>
                <div className='mb-4'>
                    <p className='text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl inline-block'>Why choose us</p>
                    <h2 className="text-4xl mt-3 font-bold font-heading lineheight2">We Provide Best <br /><span className="text-blue-500">Web design </span>services</h2>
                    <p className='mb-6 leading-loose mt-4 text-gray-400 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
                </div>

                <div className="flex flex-wrap mt-9">
                    
                    <div className="w-full md:w-1/2 items-start pt-4 pb-8 ">
                        <div className="w-8 mb-5 text-blue-500">
                            <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">1</span>
                        </div>
                        <div>
                            <h3 className="mb-2 text-xl font-semibold font-heading">Web design UX/UI</h3>
                            <p className="text-blueGray-400 leading-loose text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 items-start pt-4 pb-8 ">
                        <div className="w-8 mb-5 text-blue-500">
                            <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">2</span>
                        </div>
                        <div>
                            <h3 className="mb-2 text-xl font-semibold font-heading">React Develop</h3>
                            <p className="text-blueGray-400 leading-loose text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 items-start pt-4 pb-8 ">
                        <div className="w-8 mb-5 text-blue-500">
                            <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">3</span>
                        </div>
                        <div>
                            <h3 className="mb-2 text-xl font-semibold font-heading">Ecommerce Build</h3>
                            <p className="text-blueGray-400 leading-loose text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 items-start pt-4 pb-8 ">
                        <div className="w-8 mb-5 text-blue-500">
                            <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">2</span>
                        </div>
                        <div>
                            <h3 className="mb-2 text-xl font-semibold font-heading">CMS develop</h3>
                            <p className="text-blueGray-400 leading-loose text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Providing
