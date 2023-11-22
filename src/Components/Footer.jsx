import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <section className="py-20">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
                    <div className="w-full lg:w-1/5 px-3 mb-6 lg:mb-0">
                        <Link className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none" to="/">
                            <img className="h-10" src="https://monst-nextjs.vercel.app/assets/imgs/logos/monst-logo.svg" alt="Monst" />
                        </Link>
                    </div>
                    <div className="w-full lg:w-2/5 px-3 mb-8 lg:mb-0">
                        <p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg text-blueGray-400 leading-relaxed">Helping you <strong>maximize</strong> operations management with digitization</p>
                    </div>
                    <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
                        <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Office</p>
                        <p className="lg:text-xl text-blueGray-400 pr-12">359 Hidden Valley  Road, NY</p>
                    </div>
                    <div className="w-full lg:w-1/5 px-3">
                        <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Contacts</p>
                        <p className="lg:text-xl text-blueGray-400">(+01) 234 568</p>
                        <p className="lg:text-xl text-blueGray-400">contact@monst.com</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center lg:justify-between">
                    <p className=" text-blueGray-400 text-lg">© 2022. All rights reserved. Designed by <Link className="text-blue-400 " to="https://alithemes.com" target="_blank">Alithemes.com</Link></p>
                    <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
                        <Link className="inline-block px-2" to="https://facebook.com">
                            <img src="https://monst-nextjs.vercel.app/assets/imgs/icons/facebook-blue.svg" alt="Monst" />
                        </Link>
                        <Link className="inline-block px-2" to="https://twitter.com">
                            <img src="https://monst-nextjs.vercel.app/assets/imgs/icons/twitter-blue.svg" alt="Monst" />
                        </Link>
                        <Link className="inline-block px-2" to="https://www.instagram.com">
                            <img src="https://monst-nextjs.vercel.app/assets/imgs/icons/instagram-blue.svg" alt="Monst" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
