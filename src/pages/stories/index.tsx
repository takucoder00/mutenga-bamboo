

import React from 'react'
import Base from "../base"
import MutengaStories from '../../components/stories/MutengaStories'
import { BlogPost } from 'src/types/general'


type StoriesProp = {
  posts: [BlogPost]
}


export default function Stories(props: StoriesProp) {
  return (
    <Base className="Stories">
    
        <MutengaStories />
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
