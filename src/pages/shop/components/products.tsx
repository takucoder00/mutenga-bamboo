import React from 'react';
import mortar from '%PUBLIC_URL%/images/products/mortar.jpg'

export default function products() {
  return (
    <div id="products" className="products">
        <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Products</h1>
      <div className="flex flex-wrap -m-4">
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a target="_blank" rel="noreferrer" href="https://wa.me/263774354222?text=Hello%20Mutenga%20Bamboo%2C%20i%20am%20intrested%20in%20bamboo%20mortar%20and%20pestle" className="block relative h-48 rounded overflow-hidden">
            <img alt="mortar and pestle" className="object-cover object-center w-full h-full block" src={process.env.PUBLIC_URL + "/images/products/mortar.jpg"}></img>
          </a>
          <div className="mt-4">
            
            <h2 className="text-gray-900 title-font text-lg font-medium">Mortar and Pestle</h2>
            <p className="mt-1">$15.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a target="_blank" rel="noreferrer" href="https://wa.me/263774354222?text=Hello%20Mutenga%20Bamboo%2C%20i%20am%20intrested%20in%20bamboo%20tooth%20pic" className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={process.env.PUBLIC_URL + '/images/products/toothpic.jpg'}></img>
          </a>
          <div className="mt-4">
            
            <h2 className="text-gray-900 title-font text-lg font-medium">Tooth Pic</h2>
            <p className="mt-1">$21.15</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a target="_blank" rel="noreferrer" href="https://wa.me/263774354222?text=Hello%20Mutenga%20Bamboo%2C%20i%20am%20intrested%20in%20bamboo%20charcoal" className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={process.env.PUBLIC_URL + '/images/products/charcoal.jpg'}></img>
          </a>
          <div className="mt-4">
            
            <h2 className="text-gray-900 title-font text-lg font-medium">Charcoal</h2>
            <p className="mt-1">$12.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a target="_blank" rel="noreferrer" href="https://wa.me/263774354222?text=Hello%20Mutenga%20Bamboo%2C%20i%20am%20intrested%20in%20bamboo%20activated%20charcoal" className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={process.env.PUBLIC_URL + '/images/products/activated-charcoal.jpg'}></img>
          </a>
          <div className="mt-4">
            
            <h2 className="text-gray-900 title-font text-lg font-medium">Activated Charcoal</h2>
            <p className="mt-1">$18.40</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a target="_blank" rel="noreferrer" href="https://wa.me/263774354222?text=Hello%20Mutenga%20Bamboo%2C%20i%20am%20intrested%20in%20bamboo%20shoots" className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={process.env.PUBLIC_URL + '/images/products/shoots.jpg'}></img>
          </a>
          <div className="mt-4">
            
            <h2 className="text-gray-900 title-font text-lg font-medium">Bamboo Shoots</h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a target="_blank" rel="noreferrer" href="https://wa.me/263774354222?text=Hello%20Mutenga%20Bamboo%2C%20i%20am%20intrested%20in%20bamboo%20tooth%20seedlings" className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={process.env.PUBLIC_URL + '/images/products/seedlings.jpg'}></img>
          </a>
          <div className="mt-4">
            
            <h2 className="text-gray-900 title-font text-lg font-medium">Seedlings</h2>
            <p className="mt-1">$21.15</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a target="_blank" rel="noreferrer" href="https://wa.me/263774354222?text=Hello%20Mutenga%20Bamboo%2C%20i%20am%20intrested%20in%20bamboo%20culms" className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={process.env.PUBLIC_URL + '/images/products/culm.jpg'}></img>
          </a>
          <div className="mt-4">
            
            <h2 className="text-gray-900 title-font text-lg font-medium">Culm</h2>
            <p className="mt-1">$12.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a target="_blank" rel="noreferrer" href="https://wa.me/263774354222?text=Hello%20Mutenga%20Bamboo%2C%20i%20am%20intrested%20in%20bamboo%20paper" className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={process.env.PUBLIC_URL + '/images/products/paper.png'}></img>
          </a>
          <div className="mt-4">
            
            <h2 className="text-gray-900 title-font text-lg font-medium">Paper</h2>
            <p className="mt-1">$18.40</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  );
}
