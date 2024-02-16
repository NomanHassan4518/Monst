import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='bg-[#f1f5f9]'>
            <div className='lg:pt-40 pt-28 xl:px-20 px-4 pb-12'>
                <h1 className='lg:text-5xl text-3xl font-bold font-heading '>Our Services</h1>
                <div className="mt-5 flex items-center space-x-1 text-gray-500">
                    <Link to='/' className='hover:text-blue-500'>Home</Link>
                    <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-auto text-gray-300"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <Link to='/services' className='hover:text-blue-500'> Our Services</Link>
                    <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-auto text-gray-300"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <p className='text-gray-400'>Web Development</p>
                </div>

            </div>
        </div>
    )
}

export default Home
