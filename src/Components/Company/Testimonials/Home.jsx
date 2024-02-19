import React from 'react'

const Home = () => {
  return (
    <div className='mt-16 xl:px-20 px-4 grid lg:grid-cols-2 grid-cols-1  gap-10 '>
      <div className='relative'>
        <img className='w-full h-full z-50  top-0 right-0 object-cover object-top rounded-xl' src="https://monst-nextjs.vercel.app/assets/imgs/placeholders/img-1.png" alt="" />
        <div className='w-full h-full -z-30 absolute top-0 right-0 mt-6 rounded-xl -mr-6 bg-[#f1f5f9]'></div>
      </div>

      <div className='p-10 '>
        <img src="https://monst-nextjs.vercel.app/assets/imgs/icons/quote.svg" alt="" />
        <h1 className='my-8 leading-normal text-[36px] font-bold'>Maecenas nibh purus, pharetra ac felis sed, elementum molestie urna. Nunc at arcu non ipsum auctor lacinia quis quis mi.</h1>
        <h1 className='text-blue-500 font-bold text-lg'>Alice Bradley</h1>
        <p className='mt-1 text-gray-400 '>CEO, Co Founders</p>
      </div>
    </div>
  )
}

export default Home
