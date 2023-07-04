import { Title } from '@mantine/core';
import React from 'react';

export default function SiteVisit() {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
    
      {/* <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Site Visit</h1> */}
      <Title color="dark">Site Visit</Title>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Checkout our Mutenga Bamboo site</p>
    </div>
    <div className="flex flex-wrap -m-2 px-16">
      
      <iframe width="100%" height="600rem" src="https://www.youtube.com/embed/Vdlbi_Se_ps" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
 
    </div>
  </div>
</section>
    </>
  );
}
