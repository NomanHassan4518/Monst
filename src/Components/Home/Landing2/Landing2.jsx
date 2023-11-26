import React from 'react'
import Home from './Home'
import Business from './Business'
import Things from './Things'
import Solution from './Solution'
import Plan from './Plan'

const Landing2 = () => {
  let  homeData={
        name1:"Committed to ",
        name2:"People",
        name3:"and the future",
        img:"https://monst-nextjs.vercel.app/assets/imgs/illustrations/eating.svg",
        imgBgColor:"#f1f5f9"
    }
    return (
        <div>
            <div className="mb-8 -mt-24">
                <Home data={homeData}/>
            </div>

            <div>
                <Business/>
            </div>

            <div>
                <Things/>
            </div>

            <div>
                <Solution/>
            </div>

            <div>
                <Plan/>
            </div>
        </div>
    )
}

export default Landing2
