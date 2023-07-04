import React from 'react'
import Base from './base'
import AboutMutengaBamboo from '../components/about/aboutMutengaBamboo'
import Goals from '../components/about/goals'
import OurTeam from '../components/about/team'
import SiteVisit from '@/components/about/siteVisit'





export default function About() {
    return (
        <div id="about">
            <Base>
                <AboutMutengaBamboo />
                <Goals />
                <OurTeam />
                <SiteVisit/>
            </Base>
        </div>
    )
}
