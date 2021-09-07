import React from 'react';
import FirstHero from './components/firstHero';
import Benefits from './components/benefits';
import Inspiration from './components/inspiration';
import Testimonials from './components/testimonials';
import BlogSection from './components/blogSection';
import Base from '../base';
import Services from './components/services';




export default function Home() {
  return (
    <Base>
      <div className="Home">
        <FirstHero />
        <Benefits />
        <Services/>
        <Inspiration />
        <Testimonials />
        <BlogSection />
      </div>
    </Base>
  );
}
