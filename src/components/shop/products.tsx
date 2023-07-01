import React from 'react';
import mortar from '%PUBLIC_URL%/images/products/mortar.webp'
import { Title } from '@mantine/core';
import { Product } from 'src/types/general';
import { ProductCard } from './productCard';
import CustomPageTitle from '../general/CustomPageTitle';


let products:Product[] = [
  {
    "name": "Mortar and Pestle",
    "price": "$15.00",
    "image": "/images/products/mortar.webp",
    "link": "https://wa.me/263774354222?text=Hello%20Mutenga%20Bamboo%2C%20i%20am%20interested%20in%20bamboo%20mortar%20and%20pestle"
  },
  {
    "name": "Toothpicks",
    "price": "$21.15",
    "image": "/images/products/toothpic.webp",
    "link": "https://wa.me/263774354222?text=Hello%20Mutenga%20Bamboo%2C%20i%20am%20interested%20in%20bamboo%20tooth%20pic"
  },
  {
    "name": "Charcoal",
    "price": "$12.00",
    "image": "/images/products/charcoal.webp",
    "link": "https://wa.me/263774354222?text=Hello%20Mutenga%20Bamboo%2C%20i%20am%20interested%20in%20bamboo%20charcoal"
  },
  {
    "name": "Activated Charcoal",
    "price": "$18.40",
    "image": "/images/products/activated-charcoal.webp",
    "link": "https://wa.me/263774354222?text=Hello%20Mutenga%20Bamboo%2C%20i%20am%20interested%20in%20bamboo%20activated%20charcoal"
  },
  {
    "name": "Bamboo Shoots",
    "price": "$16.00",
    "image": "/images/products/shoots.webp",
    "link": "https://wa.me/263774354222?text=Hello%20Mutenga%20Bamboo%2C%20i%20am%20interested%20in%20bamboo%20shoots"
  },
  {
    "name": "Seedlings",
    "price": "$21.15",
    "image": "/images/products/seedlings.webp",
    "link": "https://wa.me/263774354222?text=Hello%20Mutenga%20Bamboo%2C%20i%20am%20interested%20in%20bamboo%20tooth%20seedlings"
  },
  {
    "name": "Culm",
    "price": "$12.00",
    "image": "/images/products/culm.webp",
    "link": "https://wa.me/263774354222?text=Hello%20Mutenga%20Bamboo%2C%20i%20am%20interested%20in%20bamboo%20culms"
  },
  {
    "name": "Bamboo Lathe Machine",
    "price": "$12.00",
    "image": null,
    "iframe": "https://www.youtube-nocookie.com/embed/iRD6ovBfBLw?controls=0",
    "link": "https://wa.me/263774354222?text=Hello%20Mutenga%20Bamboo%2C%20i%20am%20interested%20in%20bamboo%20lathe%20machine"
  },
  {
    "name": "Paper",
    "price": "$18.40",
    "image": "/images/products/paper.webp",
    "link": "https://wa.me/263774354222?text=Hello%20Mutenga%20Bamboo%2C%20i%20am%20interested%20in%20bamboo%20paper"
  }
]





export default function Products() {
  return (
    <div id="products" className="products">
        <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">

       <CustomPageTitle title={"Products"} />
      <div className="flex flex-wrap -m-4">

        {
          products.map((product: Product) => {

            return (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
           <ProductCard 
                name={product.name}
                image={product.image}
                price={product.price}
                link={product.link}
              

            />
        </div>
            )

          })
        }
        {/* <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a target="_blank" rel="noreferrer" href="https://wa.me/263774354222?text=Hello%20Mutenga%20Bamboo%2C%20i%20am%20intrested%20in%20bamboo%20mortar%20and%20pestle" className="block relative h-48 rounded overflow-hidden">
            <img alt="mortar and pestle" className="object-cover object-center w-full h-full block" src={"/images/products/mortar.webp"}></img>
          </a>
          <div className="mt-4">
            
            <h2 className="text-gray-900 title-font text-lg font-medium">Mortar and Pestle</h2>
            <p className="mt-1">$15.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a target="_blank" rel="noreferrer" href="https://wa.me/263774354222?text=Hello%20Mutenga%20Bamboo%2C%20i%20am%20intrested%20in%20bamboo%20tooth%20pic" className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={'/images/products/toothpic.webp'}></img>
          </a>
          <div className="mt-4">
            
            <Title order={4}>Toothpicks</Title>
            <p className="mt-1">$21.15</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a target="_blank" rel="noreferrer" href="https://wa.me/263774354222?text=Hello%20Mutenga%20Bamboo%2C%20i%20am%20intrested%20in%20bamboo%20charcoal" className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={'/images/products/charcoal.webp'}></img>
          </a>
          <div className="mt-4">
            
            <h2 className="text-gray-900 title-font text-lg font-medium">Charcoal</h2>
            <p className="mt-1">$12.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a target="_blank" rel="noreferrer" href="https://wa.me/263774354222?text=Hello%20Mutenga%20Bamboo%2C%20i%20am%20intrested%20in%20bamboo%20activated%20charcoal" className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={'/images/products/activated-charcoal.webp'}></img>
          </a>
          <div className="mt-4">
            
            <h2 className="text-gray-900 title-font text-lg font-medium">Activated Charcoal</h2>
            <p className="mt-1">$18.40</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a target="_blank" rel="noreferrer" href="https://wa.me/263774354222?text=Hello%20Mutenga%20Bamboo%2C%20i%20am%20intrested%20in%20bamboo%20shoots" className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={'/images/products/shoots.webp'}></img>
          </a>
          <div className="mt-4">
            
            <h2 className="text-gray-900 title-font text-lg font-medium">Bamboo Shoots</h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a target="_blank" rel="noreferrer" href="https://wa.me/263774354222?text=Hello%20Mutenga%20Bamboo%2C%20i%20am%20intrested%20in%20bamboo%20tooth%20seedlings" className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={'/images/products/seedlings.webp'}></img>
          </a>
          <div className="mt-4">
            
            <h2 className="text-gray-900 title-font text-lg font-medium">Seedlings</h2>
            <p className="mt-1">$21.15</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a target="_blank" rel="noreferrer" href="https://wa.me/263774354222?text=Hello%20Mutenga%20Bamboo%2C%20i%20am%20intrested%20in%20bamboo%20culms" className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={'/images/products/culm.webp'}></img>
          </a>
          <div className="mt-4">
            
            <h2 className="text-gray-900 title-font text-lg font-medium">Culm</h2>
            <p className="mt-1">$12.00</p>
          </div>
        </div> */}
        {/* <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a target="_blank" rel="noreferrer" href="https://wa.me/263774354222?text=Hello%20Mutenga%20Bamboo%2C%20i%20am%20intrested%20in%20bamboo%20lathe%20machine" className="block relative h-48 rounded overflow-hidden">
           
            <iframe className="object-cover object-center w-full h-full block" width="560" height="315" src="https://www.youtube-nocookie.com/embed/iRD6ovBfBLw?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </a>
          <div className="mt-4">
            
            <h2 className="text-gray-900 title-font text-lg font-medium">Bamboo Lathe Machine</h2>
            <p className="mt-1">$12.00</p>
          </div>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
          <a target="_blank" rel="noreferrer" href="https://wa.me/263774354222?text=Hello%20Mutenga%20Bamboo%2C%20i%20am%20intrested%20in%20bamboo%20paper" className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={'/images/products/paper.webp'}></img>
          </a>
          <div className="mt-4">
            
            <h2 className="text-gray-900 title-font text-lg font-medium">Paper</h2>
            <p className="mt-1">$18.40</p>
          </div>
        </div> */}
      </div>
    </div>
  </section>
    </div>
  );
}
