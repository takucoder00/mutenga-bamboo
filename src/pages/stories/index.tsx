

import React from 'react'
import Base from "../base"
import MutengaStories from '../../components/stories/MutengaStories'
import { BlogPost } from 'src/types/general'
import { apiEndpoint } from 'src/global'


type StoriesProp = {
  posts: [BlogPost]
}


export default function Stories(props: StoriesProp) {
  const { posts } = props

  return (
    <Base className="Stories">
        <MutengaStories posts={posts} />
    </Base>
  )
}


export async function getStaticProps({params} : any){
  const res = await fetch(`${apiEndpoint}/posts`)
  const posts = await res.json()

  return {
    props: {
      posts: posts.data
    }
  }


}
