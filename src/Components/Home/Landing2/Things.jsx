import React from 'react'
import { Link } from 'react-router-dom'

const Things = () => {
    let things = [
        {
            number: "1",
            name: "Project Initialization",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis."
        },
        {
            number: "2",
            name: "Looking for Creative",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis."
        },
        {
            number: "3",
            name: "Market Development",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis."
        },
    ]
    return (
        <section id='work' className='xl:px-20 px-4 py-20'>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-12">
                <div className='pb-8 lg:border-none border-b-2 border-black'>
                    <div className='max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left lg:pr-10'>
                        <h1 className='lg:text-4xl text-3xl font-bold font-heading lineheight1'>Great Things In Business Are <span className="text-blue-500"> Never Done</span> By One Person.</h1>
                    </div>
                    <p className="mt-5 leading-loose text-blueGray-400 text-lg text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.
                    </p>

                   <div className='lg:block flex items-center justify-center w-full'>
                   <button className="mt-7 bg-blue-500 py-2 px-4 font-semibold text-white transition-transform transform hover:translate-y-[-3px] duration-500 rounded  ">
                        <Link to="/services">Learn more</Link>
                    </button>
                   </div>
                </div>

                <div className='px-5'>
                    {
                        things.map((item, index) => (
                            <ul key={index} className={`space-y-12 ${index>0?"mt-7":"lg:mt-1 mt-12"}`}>
                             <li className="flex -mx-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                            <div className="px-4">
                                <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">{item.number}</span>
                                </div>
                                <div className="px-4">
                                    <h3 className="my-4 text-xl font-semibold">{item.name}</h3>
                                    <p className="text-blueGray-400 leading-loose">{item.desc}</p>
                                    </div>
                                    </li>
                            </ul>
                        ))
                    }
                    <ul className="">
                       
                                   </ul>
                </div>
            </div>
        </section>
    )
}

export default Things
