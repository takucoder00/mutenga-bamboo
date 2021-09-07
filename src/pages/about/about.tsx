import React from 'react'
import Base from '../base'
import AboutMutengaBamboo from './components/aboutMutengaBamboo'
import Goals from './components/goals'





export default function About() {
    return (
       <div id="about">
           <Base>
            <AboutMutengaBamboo />
           <Goals />
       </Base>
       </div>
    )
}
