import React from 'react';
import FirstHero from '../components/home/firstHero';
import Benefits from '../components/home/benefits';
import Inspiration from '../components/home/inspiration';
import Testimonials from '../components/home/testimonials';
import BlogSection from '../components/home/blogSection';
import Base from './base';
import Services from '../components/home/services';


export default function Home() {
 
  return (
    <Base>
      <div className="Home">
        <FirstHero />
        <Benefits />
        <Services/>
        <Inspiration />
        <Testimonials />
        {/* <BlogSection /> */}
      </div>
    </Base>
  );
}
