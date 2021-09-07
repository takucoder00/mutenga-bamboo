import React from 'react';
import { Link } from 'react-router-dom';


export default function Services() {
  return (
    <>
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="text-2xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">Our Products and Services</h1>
            </div>
            <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/3">
                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                        <div className="flex items-center mb-3">
                            <div
                                className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" width="44" height="44"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M16.5 15a4.5 4.5 0 0 0 -4.5 4.5m4.5 -8.5a4.5 4.5 0 0 0 -4.5 4.5m4.5 -8.5a4.5 4.5 0 0 0 -4.5 4.5m-4 3.5c2.21 0 4 2.015 4 4.5m-4 -8.5c2.21 0 4 2.015 4 4.5m-4 -8.5c2.21 0 4 2.015 4 4.5m0 -7.5v6" />
                                </svg>
                            </div>
                            <h2 className="text-gray-900 text-lg title-font font-medium">Farming Bamboo</h2>
                        </div>
                        <div className="flex-grow">
                            <p className="leading-relaxed text-base">One of the best ways to fully understand plants it is to grow it observe it. At Mutenga Bamboo we grow bamboo</p>
                            <Link to="/contact" className="mt-3 text-green-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                        <div className="flex items-center mb-3">
                            <div
                                className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
                                    </path>
                                </svg>
                            </div>
                            <h2 className="text-gray-900 text-lg title-font font-medium">Sourcing and Supply</h2>
                        </div>
                        <div className="flex-grow">
                            <p className="leading-relaxed text-base">Do you want some bamboo? We find it and supply it for you</p>
                            <Link to="/contact" className="mt-3 text-green-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                        <div className="flex items-center mb-3">
                            <div
                                className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" width="44" height="44"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 21c1.147 -4.02 1.983 -8.027 2 -12h6c.017 3.973 .853 7.98 2 12" />
                                    <path d="M12.5 13h4.5c.025 2.612 .894 5.296 2 8" />
                                    <path
                                        d="M9 5a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1" />
                                    <line x1="3" y1="21" x2="22" y2="21" />
                                </svg>
                            </div>
                            <h2 className="text-gray-900 text-lg title-font font-medium">Production of Bamboo products
                            </h2>
                        </div>
                        <div className="flex-grow">
                            <p className="leading-relaxed text-base">We dont just speak about the commercialization of bamboo, we are walking the talk. Check out our shop</p>
                            <Link to="/shop" className="mt-3 text-green-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                        <div className="flex items-center mb-3">
                            <div
                                className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" width="44" height="44"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
                                    <path
                                        d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
                                    <line x1="9.7" y1="17" x2="14.3" y2="17" />
                                </svg>
                            </div>
                            <h2 className="text-gray-900 text-lg title-font font-medium">Consultancy, Management, and
                                Advisory Services</h2>
                        </div>
                        <div className="flex-grow">
                            <p className="leading-relaxed text-base">We provide consultancy, management and advisory services that suits your business needs </p>
                            <Link to="/contact" className="mt-3 text-green-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/3">
                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                        <div className="flex items-center mb-3">
                            <div
                                className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" width="44" height="44"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                    <path d="M12 21h-5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v4.5" />
                                    <circle cx="16.5" cy="17.5" r="2.5" />
                                    <line x1="18.5" y1="19.5" x2="21" y2="22" />
                                </svg>
                            </div>
                            <h2 className="text-gray-900 text-lg title-font font-medium">Research and Training
                            </h2>
                        </div>
                        <div className="flex-grow">
                            <p className="leading-relaxed text-base">We are always finding many ways in which the bamboo
                                can benefit the society. We also provide training.</p>
                            <Link to="/contact" className="mt-3 text-green-500 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
