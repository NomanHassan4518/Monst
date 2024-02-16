import React from 'react'

import Home from './Home'
import Project from './Project'
import Plan from '../../Home/Landing2/Plan'
import InTeach from '../../Home/Landing4/InTeach'

const Portfolio = () => {
  return (
  <>
   <div >
   <div>
    <Home/>
   </div>

   <div className='lg:px-20 px-4 my-20'>
    <Project/>
   </div>

   <div>
    <Plan/>
   </div>

   <div>
    <InTeach/>
   </div>

   </div>
  </>
  )
}

export default Portfolio
