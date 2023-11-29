import React from 'react'
import HowWork from '../Landing1/HowWork'
import Business from '../Landing3/Business '
import Plan from '../Landing2/Plan'
import Home from './Home'
import KeyFeatures from './KeyFeatures'
import InTeach from './InTeach'

const Landing4 = () => {
  return (
    <div>
        <div>
            <Home/>
        </div>

<div>
    <KeyFeatures/>
</div>

      <div>
        <HowWork/>
      </div>

      <div>
        <Business/>
      </div>

      <div>
        <Plan/> 
      </div>

      <div>
        <InTeach/>
      </div>
    </div>
  )
}

export default Landing4
