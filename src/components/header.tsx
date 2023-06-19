//import liraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppLogo from './appLogo';


// create a component
const Header = () => {
    return (
        <div className="Header bg-gray-50">
            <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <AppLogo />
                <span className="ml-3 text-xl text-green-500">Mutenga Bamboo</span>
              </a>
              <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                
            
                <Link to="/" className="mr-5 hover:border-b-2 hover:border-green-500 px-3">Home</Link>
                <Link to="/shop#products" className="mr-5 hover:border-b-2 hover:border-green-500 px-3">Shop</Link>
                {/* <a className="mr-5 hover:border-b-2 hover:border-green-500 px-3">Inspiraton</a>
                <a className="mr-5 hover:border-b-2 hover:border-green-500 px-3">Bamboo</a>
                <a className="mr-5 hover:border-b-2 hover:border-green-500 px-3">Application</a> */}
                <Link to="/stories" className="mr-5 hover:border-b-2 hover:border-green-500 px-3">Stories</Link>
                <Link to='/about' className="mr-5 hover:border-b-2 border-green-500 px-3">About</Link>
                <Link to='/contact' className="mr-5 hover:border-b-2 border-green-500 px-3">Contact</Link>
                <Link to='/celebrations' className="mr-5 hover:border-b-2 hover:text-green- border-green-500 px-3">World Bamboo Day</Link>
              </nav>
              <Link to='/contact' className="inline-flex items-center bg-green-100 border-0 py-1 px-3 focus:outline-none hover:bg-green-500 hover:text-white rounded text-base mt-4 md:mt-0">Get In Touch
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </header>


        </div>
    );
};


export default Header;
