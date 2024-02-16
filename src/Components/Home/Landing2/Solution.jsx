import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Solution = () => {
    const sliderRef = useRef(null);
    let sliderData = [
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/img-6.png",
         
        },
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/img-7.png",
            name: "Products",
            desc: "Cocacola., Co"
        },
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/img-8.png",
            name: "Event",
            desc: "Oxford university"
        },
       

    ]

    const setting = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

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
    return (
        <section  className='xl:px-20 px-4 py-20'>
            <div className="grid grid-cols-12 gap-5">
                <div className='lg:col-span-4 col-span-12 '>
                    <div className='max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left lg:pr-10 px-3'>
                        <h1 className='lg:text-4xl text-3xl font-bold font-heading lineheight1'>Simple Solution for<span className="text-blue-500"> Complex</span> Connections </h1>
                    </div>
                    <p className="mt-5 leading-loose text-blueGray-400 text-lg text-center lg:text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.
                    </p>
                </div>

                <div className="lg:col-span-8 col-span-12">
                    <Slider ref={sliderRef} {...setting}>
                        {
                            sliderData.map((item, index) => (
                                <div key={index} style={{width:"771px"}}>
                                    <img src={item.img} alt="" />
                                </div>
                            ))
                        }
                    </Slider>

                    <div style={{ marginTop: '22px' }} className='flex items-center space-x-8 '>
                    <button className=' text-blue-500' onClick={prevSlide}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
                    </button>
                    <button className=' text-blue-500' onClick={nextSlide}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </button>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Solution
