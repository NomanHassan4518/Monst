import React from 'react'

const Specialists = () => {
  let specialists = [
    {
      img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/avatar-1.png",
      name: "Geraldine Tusoy",
      job: "CEO, Co Founders"
    },
    {
      img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/avatar-2.png",
      name: "Clara Kolawole",
      job: "CEO-Founder"
    },
    {
      img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/avatar-3.png",
      name: "Chris Fulton",
      job: "Project-Manager"
    },
    {
      img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/avatar-4.png",
      name: "Dany Connolly",
      job: "Direct-Founder"
    },
    {
      img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/avatar-5.png",
      name: "Al-amin Bishash",
      job: "Director"
     
    },
    {
      img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/avatar-6.png",
      name: "Sanuya Santa",
      job: "Marketing"
    },
    {
      img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/avatar-7.png",
      name: "Steven Job",
      job: "Designer"
    },
    {
      img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/avatar-8.png",
      name: "Romario",
      job: "Designer"
    },

  ]
  return (
    <div>
      <div className=" max-w-lg mx-auto text-center">
        <p className='py-1 inline-block px-3 mb-4 font-semibold text-blue-700 bg-blue-100 rounded-xl text-sm '>About Our Expert</p>
        <h1 className='lg:text-4xl text-3xl font-extrabold font-heading leading-normal lineheight2 '>
          Entrust Your Project To Our <span className='text-blue-600'>Specialists</span>
        </h1>
        <p className="mt-4 text-lg text-blueGray-400 ">Our IT services converge business and technology experts to help to manage business categories</p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-20">
        {
          specialists.map((item, index) => (
            <div key={index} className='bg-white border border-gray-100 shadow  rounded py-8 px-4 flex items-center justify-center flex-col transition-transform transform hover:translate-y-[-5px] duration-500'>
              <img src={item.img} className='mx-auto h-24 w-24 rounded-full object-cover mb-6' alt="" />
              <strong className=' text-lg '>{item.name}</strong>
              <p className='mt-3 text-gray-500 text-sm'>{item.job}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Specialists
