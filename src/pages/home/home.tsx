import React from 'react';
import FirstHero from './components/firstHero';
import Header from '../../components/header';
import Benefits from './components/benefits';
import Products from './components/products';
import Inspiration from './components/inspiration';
import Testimonials from './components/testimonials';
import BlogSection from './components/blogSection';
import Footer from '../../components/footer';
import Base from '../base';


export default function Home() {
  return (
    <Base>
      <div className="Home">
        <FirstHero />
        <Benefits />
        <Products />
        <Inspiration />
        <Testimonials />
        <BlogSection />
      </div>
    </Base>
  );
}
