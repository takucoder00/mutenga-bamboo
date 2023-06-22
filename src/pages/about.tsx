import React from 'react'
import Base from './base'
import AboutMutengaBamboo from '../components/about/aboutMutengaBamboo'
import Goals from '../components/about/goals'
import OurTeam from '../components/about/team'





export default function About() {
    return (
       <div id="about">
           <Base>
            <AboutMutengaBamboo />
           <Goals />
              <OurTeam />
       </Base>
       </div>
    )
}
