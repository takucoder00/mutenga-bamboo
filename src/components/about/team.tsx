import React from 'react';

export default function OurTeam() {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Meet the team behind MutengaBamboo</p>
    </div>
    <div className="flex flex-wrap -m-2">
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center shrink-0 rounded-full mr-4" src={process.env.PUBLIC_URL + '/images/team/1.jpeg'}/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Rowen Meda</h2>
            <p className="text-gray-500">CEO and Founder</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center shrink-0 rounded-full mr-4" src={process.env.PUBLIC_URL + '/images/team/5.jpeg'}/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Farai Musendo</h2>
            <p className="text-gray-500">Co Founder</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center shrink-0 rounded-full mr-4" src={process.env.PUBLIC_URL + '/images/team/4.jpeg'}/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Lianda Meda</h2>
            <p className="text-gray-500">Director</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center shrink-0 rounded-full mr-4" src={process.env.PUBLIC_URL + '/images/team/2.jpeg'}/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Beauty Chinyuku</h2>
            <p className="text-gray-500">Accountant</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center shrink-0 rounded-full mr-4" src={process.env.PUBLIC_URL + '/images/team/3.jpeg'}/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Gamuchirai Taruwona</h2>
            <p className="text-gray-500">Enviromentalist</p>
          </div>
        </div>
      </div>
      
      {/* <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Martin Eden</h2>
            <p className="text-gray-500">Software Engineer</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Boris Kitua</h2>
            <p className="text-gray-500">UX Researcher</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center shrink-0 rounded-full mr-4" src="https://dummyimage.com/100x90"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Atticus Finch</h2>
            <p className="text-gray-500">QA Engineer</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Alper Kamu</h2>
            <p className="text-gray-500">System</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98"/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Rodrigo Monchi</h2>
            <p className="text-gray-500">Product Manager</p>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</section>
    </>
  );
}
