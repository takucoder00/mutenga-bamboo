


import React from 'react'
import { BlogPost } from 'src/types/general'
import Base from './base'
import { StoryDetail } from '@/components/stories/storyDetail'

export default function Story() {
  return (
    <Base>

        <StoryDetail/>
    
    </Base>
  )
}

async function getStaticPaths() {
 
    // Call an outside API endpoint to get posts
    const res = await fetch(`${process.env.ENDPOINT_URL}/posts`)
    const posts = await res.json()
 
    // Get the ways we need to pre-render in light of posts
    const ways = posts.map((post: BlogPost) => ({
        params: { id: post.slug },
    }))
 
    // We'll pre-render just these ways at assemble time.
    return { ways, fallback:false }
 
}
