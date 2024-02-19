import React from 'react'

const Exports = () => {
    // const style = {

    //     // Adding media query..
    //     '@media (max-width: 500px)': {
    //       display: 'none',
    //     },
    //   };

    const experts = [
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/avatar-1.png",
            name: "Geraldine Tusoy",
            job: "CEO, Co Founders",
            desc: "Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.",
            icon1: "https://monst-nextjs.vercel.app/assets/imgs/icons/facebook-blue.svg",
            icon2: "https://monst-nextjs.vercel.app/assets/imgs/icons/instagram-blue.svg"

        },
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/avatar-2.png",
            name: "Clara Kolawole",
            job: "CEO-Founder",
            desc: "Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.",
            icon1: "https://monst-nextjs.vercel.app/assets/imgs/icons/facebook-blue.svg",
            icon2: "https://monst-nextjs.vercel.app/assets/imgs/icons/instagram-blue.svg"

        },
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/avatar-3.png",
            name: "Chris Fulton",
            job: "Project-Manager",
            desc: "Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.",
            icon1: "https://monst-nextjs.vercel.app/assets/imgs/icons/facebook-blue.svg",
            icon2: "https://monst-nextjs.vercel.app/assets/imgs/icons/instagram-blue.svg"

        },
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/avatar-4.png",
            name: "Dany Connolly",
            job: "Direct-Founder",
            desc: "Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.",
            icon1: "https://monst-nextjs.vercel.app/assets/imgs/icons/facebook-blue.svg",
            icon2: "https://monst-nextjs.vercel.app/assets/imgs/icons/instagram-blue.svg"

        },
    ]
    return (
        <div className='bg-[#f8fafc] pt-20 lg:px-20 px-4'>
            <div className='flex items-center justify-center flex-col max-w-lg mx-auto  mb-12 text-center'>
                <p className='bg-blue-100 text-sm font-semibold text-blue-600 py-1 px-3 rounded-full'>Our Team Leader</p>
                <h1 className='lg:text-4xl text-2xl font-bold text-center font-heading mb-4 mt-2 md:!leading-normal' >
                    Meet Your
                    <span className='text-blue-500'> Experts</span> <br /> Team Member
                </h1>
                <p className=' text-gray-400 text-center leading-relaxed text-xl'>Our Customers Very Happy With Our Services.</p>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                {
                    experts.map((item, index) => (
                        <div key={index} className='bg-white rounded px-6 py-10 shadow hover:-translate-y-1 duration-300'>
                            <div className="flex items-center mb-4">
                                <img className='h-16 w-16 rounded-full object-cover' src={item.img} alt="" />
                                <div className='pl-3'>
                                    <h1 className=' mb-2 font-bold text-lg'>{item.name}</h1>
                                    <p className='text-gray-500 text-sm'>{item.job}</p>
                                </div>
                            </div>
                            <p className='leading-loose text-gray-400 mb-5'>{item.desc}</p>
                            <div className="flex items-center space-x-4">
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

export default Exports
