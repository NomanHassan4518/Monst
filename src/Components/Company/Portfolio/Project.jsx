import React from 'react'

const Project = () => {
    return (
        <div>
            <div className='flex items-center justify-center flex-col max-w-lg mx-auto mb-12 text-center'>
                <p className='bg-blue-100 text-sm font-semibold text-blue-600 py-1 px-3 rounded-full'>Our Projects</p>
                <h1 className='lg:text-4xl text-2xl font-bold text-center font-heading mb-4 mt-2' style={{ lineHeight: "50px" }}>
                    Check Out <br />
                    Our <span className='text-blue-500'>Latest</span> Project
                </h1>
                <p className=' text-gray-400 text-center leading-relaxed text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
            </div>

            <div className="mt-5 grid md:grid-cols-2 grid-cols-1 gap-5">
                <div className='grid grid-cols-2 gap-5'>
                    <div className='hover:-translate-y-1 h-64 duration-300'>
                        <img className='h-full object-cover rounded' src="https://monst-nextjs.vercel.app/assets/imgs/placeholders/img-10.jpg" alt="" />
                    </div>
                    <div className='hover:-translate-y-1 h-64 duration-300'>
                        <img className='h-full object-cover rounded' src="https://monst-nextjs.vercel.app/assets/imgs/placeholders/img-11.jpg" alt="" />
                    </div>
                    <div className='hover:-translate-y-1 h-64 duration-300'>
                        <img className='h-full object-cover rounded' src="https://monst-nextjs.vercel.app/assets/imgs/placeholders/img-12.jpg" alt="" />
                    </div>
                    <div className='hover:-translate-y-1 h-64 duration-300'>
                        <img className='h-full object-cover rounded' src="https://monst-nextjs.vercel.app/assets/imgs/placeholders/img-13.jpg" alt="" />
                    </div>
                </div>

                <div className='relative hover:-translate-y-1 duration-300'>
                    <div>
                        <img className='h-[33rem] w-full object-cover' src="https://monst-nextjs.vercel.app/assets/imgs/placeholders/img-9.jpg" alt="" />
                    </div>
                    <div className='absolute top-[50%] left-[50%] w-[70%] -translate-x-[50%] -translate-y-[50%] text-center bg-white rounded  px-8 py-12' >
                            <h1 className='text-[24px] font-bold place-content-center'>Web Desin</h1>
                            <p className='mt-5 mb-6 text-[16px] text-[#1E293B] place-content-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi eveniet rem fugiat deserunt molestias.</p>
                            <button className='tracking-wide hover:-translate-y-1 duration-300 inline-block px-4 py-3 text-xs font-semibold leading-none bg-blue-400 hover:bg-blue-500 text-white rounded'>View details</button>
                    </div>
                </div>

                <div className='relative hover:-translate-y-1 duration-300'>

                    <div>
                        <img className='h-[33rem] w-full object-cover' src="https://monst-nextjs.vercel.app/assets/imgs/placeholders/img-9.jpg" alt="" />
                    </div>
                    <div className='absolute top-[50%] left-[50%] w-[70%] -translate-x-[50%] -translate-y-[50%] text-center bg-white rounded  px-8 py-12' >
                            <h1 className='text-[24px] font-bold place-content-center'>CMS Development</h1>
                            <p className='mt-5 mb-6 text-[16px] text-[#1E293B] place-content-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi eveniet rem fugiat deserunt molestias.</p>
                            <button className='tracking-wide hover:-translate-y-1 duration-300 inline-block px-4 py-3 text-xs font-semibold leading-none bg-blue-400 hover:bg-blue-500 text-white rounded'>View details</button>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-5'>
                    <div className='hover:-translate-y-1 h-64 duration-300'>
                        <img className='h-full object-cover rounded' src="https://monst-nextjs.vercel.app/assets/imgs/placeholders/img-10.jpg" alt="" />
                    </div>
                    <div className='hover:-translate-y-1 h-64 duration-300'>
                        <img className='h-full object-cover rounded' src="https://monst-nextjs.vercel.app/assets/imgs/placeholders/img-11.jpg" alt="" />
                    </div>
                    <div className='hover:-translate-y-1 h-64 duration-300'>
                        <img className='h-full object-cover rounded' src="https://monst-nextjs.vercel.app/assets/imgs/placeholders/img-12.jpg" alt="" />
                    </div>
                    <div className='hover:-translate-y-1 h-64 duration-300'>
                        <img className='h-full object-cover rounded' src="https://monst-nextjs.vercel.app/assets/imgs/placeholders/img-13.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
