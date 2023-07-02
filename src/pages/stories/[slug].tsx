


import React from 'react'
import { BlogPost } from 'src/types/general'
import Base from '../base'
import { StoryDetail } from '@/components/stories/storyDetail'
import { apiEndpoint } from 'src/global'

export default function Story({post}: { post: BlogPost}) {
  return (
    <Base>

        <StoryDetail post={post}/>
    
    </Base>
  )
}

export async function getStaticPaths() {
 
    // Call an outside API endpoint to get posts
    const res = await fetch(`${apiEndpoint}/posts`)
    const posts = await res.json()

    // console.log("Posts: ", posts)

    // Get the ways we need to pre-render in light of posts
    const paths = posts.data.map((post: BlogPost) => ({
        params: { slug: post.slug },
    }))

    // console.log("Paths: ", paths)
 
    // We'll pre-render just these ways at assemble time.
    return { paths, fallback:true }
 
}


export async function getStaticProps({params} : any){
  const res = await fetch(`${apiEndpoint}/posts/${params.slug}`)
  const post = await res.json()

  return {
    props: {
      post: post.data
    }
  }


}

