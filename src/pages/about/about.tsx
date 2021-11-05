import React from 'react'
import Base from '../base'
import AboutMutengaBamboo from './components/aboutMutengaBamboo'
import Goals from './components/goals'
import OurTeam from './components/team'





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
