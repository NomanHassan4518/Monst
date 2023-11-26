import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';



const Solution = () => {
    const sliderRef = useRef(null);
    let sliderData = [
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/img-2.jpg",
            name: "User growth",
            desc: "Harvard university"
        },
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/img-3.jpg",
            name: "Products",
            desc: "Cocacola., Co"
        },
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/img-4.jpg",
            name: "Event",
            desc: "Oxford university"
        },
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/img-5.jpg",
            name: "Shopping",
            desc: "Alibaba Co"
        },

    ]

    // const CustomDots = ({ onClick, active }) => (
    //     <span
    //       className={`custom-dot ${active ? 'active' : ''}`}
    //       onClick={onClick}
    //     ></span>
    //   );

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        // appendDots: (dots) => (
        //     <div style={{marginTop:"50px", textAlign: 'center' }}>
        //       <ul style={{ padding: '0', marginTop: '10px' }}>{dots}</ul>
        //     </div>
        //   ),
        //   customPaging: (i) => <CustomDots key={i} />,
        responsive: [
            {
                breakpoint: 1024, // for large screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                },
            },
            {
                breakpoint: 768, // for medium screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // for small screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const nextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const prevSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    // const CustomDots = ({ index, onClick, active }) => (
    //     <div
    //         className={`custom-dot ${active ? 'active' : ''}`}
    //         onClick={() => onClick(index)}
    //     ></div>
    // );

    // const goToSlide = (index) => {
    //     if (sliderRef.current) {
    //       sliderRef.current.slickGoTo(index);
    //     }
    //   };
    return (
        <div className='xl:px-16 px-4 py-16  grid grid-cols-12 gap-6 border-2 border-white'>
            <div className='lg:col-span-4 col-span-12 lg:text-start text-center flex flex-col items-center lg:items-start justify-center lg:justify-start'>
                <h1 className='lg:text-4xl text-3xl max-w-md lg:max-w-xs lg:pr-16  font-heading font-extrabold lg:solution  w-full'>
                    {/* Simple <br /> Solution for <br /> <p className="text-blue-500">Complex</p> Connections */}
                    Simple Solution for <span className='text-blue-500'>Complex</span> Connections
                </h1>
                <p className="mt-3  text-[#94a3b8] text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.
                </p>
            </div>
            <div className='lg:col-span-8 col-span-12 lg:space-x-6 '>
                <Slider ref={sliderRef} {...settings} >

                    {
                        sliderData.map((item, index) => (
                            <div key={index} className='rounded-xl'>
                                <div className='border border-gray-100 hover:shadow-lg flex flex-col justify-center items-center p-5 rounded-xl lg:mr-10 '>
                                    <img src={item.img} alt="" className='w-72 rounded-xl h-auto' />
                                    <div className="mt-4 flex items-center xl:space-x-12 space-x-2 ">
                                        <h1>
                                            <Link to="/" className='text-xl hover:text-blue-500 font-semibold'>{item.name}</Link>
                                            <p className='text-sm mt-3'>{item.desc}</p>
                                        </h1>
                                        <button className='transition-transform transform hover:translate-y-[-3px] duration-500'>
                                            <Link to="/" className='py-2 px-4 border border-[#4286f6] rounded-md font-semibold hover:text-white hover:bg-blue-500 text-blue-500'>View Detail</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </Slider>

                <div style={{ marginTop: '32px' }} className='flex items-center space-x-8 '>
                    <button className=' text-blue-500' onClick={prevSlide}>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
                    </button>
                    <button className=' text-blue-500' onClick={nextSlide}>
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </button>
                </div>

                {/* <div className="mt-12 flex space-x-6">
                    {sliderData.map((_, index) => (
                        <CustomDots key={index} index={index} onClick={goToSlide} />
                    ))}
                </div> */}

            </div>
        </div>
    )
}

export default Solution
