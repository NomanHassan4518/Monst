import React from 'react'

const HowWork = () => {
    let team = [
        {
            number: "1",
            img: "https://monst-nextjs.vercel.app/assets/imgs/illustrations/eating.svg",
            name: "Project Initialization",
            desc: "Project initiation ensures that you lay a strong foundation for a new project in your company our team."
        },
        {
            number: "2",
            img: "https://monst-nextjs.vercel.app/assets/imgs/illustrations/space.svg",
            name: "Project Planning",
            desc: "A project plan is essential to keep everything related to the project organized, methodical, and on track."
        },
        {
            number: "3",
            img: "https://monst-nextjs.vercel.app/assets/imgs/illustrations/tasks.svg",
            name: "Project Organization",
            desc: "Moving forward you will be able to keep yourself and your team on track, and address challenges early."
        },
    ]
    return (
        <section id='work' className='mt-24 px-20 py-16 bg-[#f8fafc] '>
            <div className="grid grid-cols-2 gap-5 ">
                <h1 className='text-4xl font-bold font-heading leading-normal '>
                    We are <span className='text-blue-600'> awesome team </span> <br />
                    for your business dream
                </h1>
                <p className='text-[#94a3b8]  text-lg '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis. Quisque vitae nulla malesuada, auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id imperdiet.</p>
            </div>

            <div className="grid grid-cols-3 gap-5 mt-12">
                {
                    team.map((item, index) => (
                        <div key={index} className='bg-white px-12 py-14 flex flex-col items-center justify-center rounded-xl shadow-lg transition-transform transform hover:translate-y-[-8px] ease-in-out duration-500'>
                            <p className='text-lg font-bold font-heading bg-blue-200 flex items-center justify-center text-blue-800 w-12 h-12 rounded-full'>{item.number}</p>
                            <img src={item.img} className='my-5 h-36' alt="" />
                            <h1 className='text-2xl font-bold mt-3'>{item.name}</h1>
                            <p className='my-3 text-center text-sm leading-relaxed  text-[#94a3b8]'>{item.desc}</p>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}

export default HowWork
