import React from 'react'

const Members = () => {
    const members = [
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/avatar-1.png",
            name: "Geraldine Tusoy",
            job: "CEO, Co Founders",
            icon1: "https://monst-nextjs.vercel.app/assets/imgs/icons/facebook.svg",
            icon2: "https://monst-nextjs.vercel.app/assets/imgs/icons/twitter.svg",
        },
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/avatar-2.png",
            name: "Clara Kolawole",
            job: "CEO-Founder",
            icon1: "https://monst-nextjs.vercel.app/assets/imgs/icons/facebook.svg",
            icon2: "https://monst-nextjs.vercel.app/assets/imgs/icons/twitter.svg",
        },
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/avatar-3.png",
            name: "Chris Fulton",
            job: "Project-Manager",
            icon1: "https://monst-nextjs.vercel.app/assets/imgs/icons/facebook.svg",
            icon2: "https://monst-nextjs.vercel.app/assets/imgs/icons/twitter.svg",
        },
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/avatar-4.png",
            name: "Dany Connolly",
            job: "Direct-Founder",
            icon1: "https://monst-nextjs.vercel.app/assets/imgs/icons/facebook.svg",
            icon2: "https://monst-nextjs.vercel.app/assets/imgs/icons/twitter.svg",
        },
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/avatar-5.png",
            name: "Al-amin Bishash",
            job: "Director",
            icon1: "https://monst-nextjs.vercel.app/assets/imgs/icons/facebook.svg",
            icon2: "https://monst-nextjs.vercel.app/assets/imgs/icons/twitter.svg",
        },
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/avatar-6.png",
            name: "Sanuya Santa",
            job: "Marketing",
            icon1: "https://monst-nextjs.vercel.app/assets/imgs/icons/facebook.svg",
            icon2: "https://monst-nextjs.vercel.app/assets/imgs/icons/twitter.svg",
        },
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/avatar-7.png",
            name: "Steven Job",
            job: "Designer",
            icon1: "https://monst-nextjs.vercel.app/assets/imgs/icons/facebook.svg",
            icon2: "https://monst-nextjs.vercel.app/assets/imgs/icons/twitter.svg",
        },
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/avatar-8.png",
            name: "Romario",
            job: "Designer",
            icon1: "https://monst-nextjs.vercel.app/assets/imgs/icons/facebook.svg",
            icon2: "https://monst-nextjs.vercel.app/assets/imgs/icons/twitter.svg",
        },
    ]
    return (
        <div className='mt-20 xl:px-20 px-4'>
            <div className='flex items-center justify-center flex-col max-w-lg mx-auto  mb-12 text-center'>
                <p className='bg-blue-100 text-sm font-semibold text-blue-600 py-1 px-3 rounded-full'>Our Team</p>
                <h1 className='lg:text-4xl text-2xl font-bold text-center font-heading mb-4 mt-2 md:!leading-normal' >
                    Our Awesome <br />
                    <span className='text-blue-500'>Creative</span>  Team Member
                </h1>
                <p className=' text-gray-400 text-center leading-relaxed text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 ">
                {
                    members.map((item, index) => (
                        <div key={index} className='text-center space-y-5 hover:-translate-y-1 duration-500'>
                            <img className='h-64 w-64 mx-auto rounded object-cover object-top' src={item.img} alt="" />
                            <div>
                                <h1 className='text-lg font-bold mb-1'>{item.name}</h1>
                                <p className='text-gray-500 text-sm'>{item.job}</p>
                            </div>

                            <div className="flex items-center justify-center space-x-4">
                                <img src={item.icon1} alt="" />
                                <img src={item.icon2} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Members
