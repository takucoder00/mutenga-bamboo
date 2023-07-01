import React from 'react'
import { StoryCard } from './storyCard'
import { BlogPost } from 'src/types/general'
import CustomPageTitle from '../general/CustomPageTitle'


export default function MutengaStories({ posts }: any) {

    return (
        <div className="bg-gray-50">
            <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

    <CustomPageTitle title={"Stories"} />
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



