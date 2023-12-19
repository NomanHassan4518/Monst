import React from 'react'

const Team = () => {
    let team = [
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/img-1.png",
            name: "Michael Jackson",
            job: "CEO",
            desc: "Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.",
            icon: "https://monst-nextjs.vercel.app/assets/imgs/icons/facebook-blue.svg",
            icon1: "https://monst-nextjs.vercel.app/assets/imgs/icons/instagram-blue.svg",
        },
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/img-2.jpg",
            name: "Oprah Winfrey",
            job: "Head of Development",
            desc: "Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.",
            icon: "https://monst-nextjs.vercel.app/assets/imgs/icons/facebook-blue.svg",
            icon1: "https://monst-nextjs.vercel.app/assets/imgs/icons/instagram-blue.svg",
        },
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/img-5.jpg",
            name: "Leonardo",
            job: "Head of Operations",
            desc: "Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.",
            icon: "https://monst-nextjs.vercel.app/assets/imgs/icons/facebook-blue.svg",
            icon1: "https://monst-nextjs.vercel.app/assets/imgs/icons/twitter-blue.svg",
        },
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/img-6.png",
            name: "Jerry Seinfeld",
            job: "Head of Development",
            desc: "Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.",
            icon: "https://monst-nextjs.vercel.app/assets/imgs/icons/facebook-blue.svg",
            icon2: "https://monst-nextjs.vercel.app/assets/imgs/icons/instagram-blue.svg",
            icon1: "https://monst-nextjs.vercel.app/assets/imgs/icons/twitter-blue.svg",
        },
    ]
    return (
        <div className='xl:px-20 px-4 py-20 bg-[#f8fafc] mb-20 '>
            <div className='max-w-lg mx-auto mb-12 text-center'>
                <p className='py-1 inline-block px-3 font-semibold text-blue-700 bg-blue-100 rounded-xl text-sm '>Our Team</p>
                <h2 className='lg:text-4xl text-3xl font-extrabold font-heading mt-4 text-center lineheight2'>Meet our awesome team</h2>
                <p className="mt-4 text-lg text-blueGray-400 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
            </div>

            <div className="mt-20 grid md:grid-cols-2 grid-cols-1 gap-10">
                {
                    team.map((item, index) => (
                        <div key={index} className='bg-white rounded shadow-lg py-8 px-4'>
                            <div className="flex items-center">
                                <img src={item.img} className='h-16 w-16 rounded-full object-cover' alt="" />
                                <div className="pl-4">
                                    <p className='text-xl font-bold'>{item.name}</p>
                                    <p className='text-blue-600'>{item.job}</p>
                                </div>
                            </div>

                            <p className='mt-5 px-3 text-[#94a3b8]'>{item.desc}</p>

                            <div className=" mt-4">
                                {
                                    index === 3 ?
                                        <div className='flex items-center  space-x-4'>
                                            <img src={item.icon} alt="" />
                                            <img src={item.icon2} alt="" />
                                            <img src={item.icon1} alt="" />
                                        </div> : <div className='flex items-center  space-x-4'>
                                            <img src={item.icon} alt="" />
                                            <img src={item.icon1} alt="" />
                                        </div>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Team
