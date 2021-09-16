import React from 'react';

export default function Benefits() {
    return (
        <div className="benefits">
            <section>

                <div className="bg-white dark:bg-gray-800">


                    <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h1 className="text-2xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">Bamboo Benefits</h1>
                                <p className="mt-2 text-gray-600 dark:text-gray-300">Bamboos offers a natural, fast-growing alternative for flooring, decking, wall-covering, beams, boards and worktops, which meets the highest requirements.</p>
                                <div className="grid gap-6 mt-8 sm:grid-cols-2">
                                    <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>

                                        <span>CO2 Neutral</span>
                                    </div>

                                    <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>

                                        <span>Hard and Durable</span>
                                    </div>

                                    <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>

                                        <span>Healthy Choice</span>
                                    </div>

                                    <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>

                                        <span>Can last up to 30 years</span>
                                    </div>

                                    <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>

                                        <span>Natural Beauty</span>
                                    </div>

                                    <div className="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>

                                        <span>Renewable</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                            <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://cdn.shopify.com/s/files/1/0062/8532/8445/files/BB_bamboo-plants_480x480.jpg?v=1620332090" alt="glasses photo"></img>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
