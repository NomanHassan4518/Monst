import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className=' bg-[#f1f5f9] -mt-24 lg:pt-44 pt-28  pb-12'>
      <div className="text-center">
      <h1 className='text-2xl lg:text-[52px] text-gray-900 font-bold font-heading mb-5'>Our Portfolio</h1>
      <ul className='text-gray-500 mx-auto pb-12  flex items-center justify-center'>
        <li className='inline-flex items-center'>
            <Link to='/' className='hover:text-blue-500'>Home</Link>
            <p><svg fill="currentColor" viewBox="0 0 20 20" class="h-5 w-auto text-gray-300"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></p>
        </li>
        <li className='text-gray-400'>Portfolio</li>
      </ul>
      </div>
    </div>
  )
}

export default Home
