import React, { useRef } from 'react';import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Work = () => {
    const sliderRef = useRef(null);
    let sliderData = [
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/mockup-1.png",
         
        },
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/mockup-2.png",
           
        },
        {
            img: "https://monst-nextjs.vercel.app/assets/imgs/placeholders/mockup-3.png",

        },
       

    ]

    const setting = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <section id='work' className='xl:px-20 px-4 py-20'>
            <div className="flex flex-col items-center justify-center">
                <p className='py-1 px-3 font-semibold text-blue-700 bg-blue-100 rounded-xl text-sm'>How we work</p>
                <h2 className='lg:text-4xl text-3xl font-extrabold font-heading mt-4 text-center lineheight2'>Partner Company Business <br /> And Me Success Fully</h2>
                <p className="mt-4 text-lg text-blueGray-400">IT Solution For Your Business Is Best Theme</p>

                <div className="mt-24 relative">
                    <img src="	https://monst-nextjs.vercel.app/assets/imgs/elements/macbook.png" alt="" />

                    <div className='absolute top-[5.8%] left-[14.6%] w-[72.8%] h-[76.7%] '>
                    <Slider ref={sliderRef} {...setting}>
                        {
                            sliderData.map((item, index) => (
                                <div key={index} style={{width:"771px"}}>
                                    <img src={item.img} alt="" />
                                </div>
                            ))
                        }
                    </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work
