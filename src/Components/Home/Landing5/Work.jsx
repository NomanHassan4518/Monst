import React from 'react'

const Work = () => {
  return (
    <div className='py-24 xl:px-20 px-4'>
      <div className="md:grid md:grid-cols-2 grid-cols-1 gap-5 flex flex-col-reverse">
<div className='lg:pr-44'>
<h1 className='lg:text-4xl text-3xl font-bold font-heading mb-3'>How we work?</h1>
<p className='text-blueGray-400 text-lg mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
<ul>
    <li className='py-4'>
        <span className='inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded'>1</span>
        <span>Expand Your Reach</span>
    </li>
    <li className='py-4'>
        <span className='inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded'>2</span>
        <span>Annualized Growth</span>
    </li>
    <li className='py-4'>
        <span className='inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded'>3</span>
        <span>Book Your Providers</span>
    </li>
</ul>
</div>
<div>
    <img src="https://monst-nextjs.vercel.app/assets/imgs/illustrations/podcast.svg" alt="" />
</div>
      </div>
    </div>
  )
}

export default Work
