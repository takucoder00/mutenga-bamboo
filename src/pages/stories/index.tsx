

import React from 'react'
import Base from "../base"
import MutengaStories from '../../components/stories/MutengaStories'
import { BlogPost } from 'src/types/general'


type StoriesProp = {
  posts: [BlogPost]
}


export default function Stories(props: StoriesProp) {

  console.log("Stories Props: ", props)

  const { posts } = props

  return (
    <Base className="Stories">
        <MutengaStories posts={posts} />
    </Base>
  )
}


export async function getStaticProps({params} : any){
  const res = await fetch(`${process.env.ENDPOINT_URL}/posts`)
  const posts = await res.json()

  return {
    props: {
      posts: posts.data
    }
  }


}
