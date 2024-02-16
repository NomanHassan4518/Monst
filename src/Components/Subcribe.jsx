import React from 'react'

const Subcribe = () => {
  return (
    <section className="py-20 bg-blue-500 mb-20">
        <div className="container">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="mb-4 text-3xl lg:text-3xl text-white font-bold font-heading">
              <span>Subscribe now to </span>
              <span className="text-blue-200">Our Newsletter</span> <br />
              <span>and get the Coupon code.</span>
            </h2>
            <p className="mb-8 text-gray-200">All your information is completely confidential</p>
            <div className="flex flex-wrap max-w-lg mx-auto px-4 lg:px-0">
              <div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-blue-500 border border-blue-300 rounded">
                <svg className="h-6 w-6 my-auto text-blue-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                <input className="w-full pl-3 py-4 text-xs text-white placeholder-white font-semibold leading-none border-none focus:ring-0 bg-blue-500 outline-none" type="text" placeholder="Type your e-mail" fdprocessedid="6rxkzf" />
              </div>
              <button className="w-full md:w-auto py-4 px-8 text-xs text-blue-800 hover:text-white font-semibold leading-none border border-blue-300 hover:border-blue-300 bg-white hover:bg-blue-500 rounded transition duration-300 ease-in-out" type="submit" fdprocessedid="628sih">Sign Up</button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Subcribe
