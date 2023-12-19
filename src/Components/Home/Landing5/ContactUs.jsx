import React from 'react'

const ContactUs = () => {
  return (
    <div className='xl:px-20 px-4 py-20'>
      <div className='max-w-2xl mx-auto text-center'>
        <div className='max-w-md mb-8 mx-auto'>
          <p className='text-blueGray-400'>Contact us</p>
          <h1 className='lg:text-[36px] text-3xl font-bold font-heading'>
            We will <span className='text-blue-600'>be glad</span> to hear from you!
          </h1>
        </div>
      </div>

      <div className="mt-7">

        <div className="mb-4  flex items-center justify-center " >
          <span className="mr-4 font-semibold">Departament:</span>
          <label className="mr-4">
            <input className="mr-1" type="radio" name="department" value="1" />
            <span>Support</span>
          </label>
          <label>
            <input className="mr-1" type="radio" name="department" value="2" />
            <span>Sales</span>
          </label>
        </div>

        

        <div className="max-w-2xl mx-auto text-center ">
          <div className='space-y-4 w-full '>

            <div className="mb-4">
              <input className="w-full border-none focus:ring-0 p-4 text-xs font-semibold leading-none bg-[#f8fafc] rounded outline-none" type="text" placeholder="Subject" />
            </div>

            <div className="mb-4">
              <input className="w-full border-none focus:ring-0 p-4 text-xs font-semibold leading-none bg-[#f8fafc] rounded outline-none" type="text" placeholder="Name" />
            </div>

            <div className="mb-4" >
            <input className="w-full border-none focus:ring-0 p-4 text-xs font-semibold leading-none bg-[#f8fafc] rounded outline-none" type="email" placeholder="name@example.com" />
          </div>

          <div className="w-full mb-4">
            <textarea className="w-full border-none focus:ring-0 h-[90px] p-4 text-xs font-semibold leading-none resize-none bg-[#f8fafc] rounded outline-none" placeholder="Message...">
            </textarea>
          </div>

          <div className="mb-4" >
            <label className="flex px-2 bg-[#f8fafc] rounded">
              <input className="hidden border-none focus:ring-0" type="file" name="Choose file" />
              <span className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-[#64748b] hover:bg-blueGray-600 rounded cursor-pointer" >Browse</span>
            </label>
          </div>


          <div className="flex justify-between items-center">
            <label>
              <input className="mr-1" type="checkbox" name="terms" value="1" />
              <span className="text-sm font-semibold">I agree to terms and conditions.</span>
            </label>
            <button className="py-4 px-8 text-sm text-white font-semibold leading-none bg-[#3b82f6] hover:bg-[#1D4ED8] rounded" type="submit">Submit</button>
          </div>

        </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
