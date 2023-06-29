import React from 'react'
import { StoryCard } from './storyCard'
import { BlogPost } from 'src/types/general'


export default function MutengaStories({ posts }: any) {

    return (
        <div className="bg-gray-50">
            <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
    
    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
      <span className="relative inline-block">
        <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
          <defs>
            <pattern id="3071a3ad-db4a-4cbe-ac9a-47850b69e4b7" x="0" y="0" width=".135" height=".30">
              <circle cx="1" cy="1" r=".7"></circle>
            </pattern>
          </defs>
          
        </svg>
       
      </span>
       Stories
    </h2>
    <p className="text-base text-gray-700 md:text-lg">
    Read our stories
    </p>
  </div>
  <div className="grid max-w-screen-lg gap-8 lg:grid-cols-4 sm:mx-auto">

    {
      posts && posts.map((post: BlogPost) => {

        return (
          <StoryCard 
              id={post.id}
              slug={post.slug}
              image={ process.env.STORAGE_PATH + "/" + post.image} 
              title={post.title}/>
        )

      })
    }




     
    
  </div>
</div>
        </div>
    )
}



