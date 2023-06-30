import Base from "@/pages/base"
import { Image, Title, Divider, Text } from "@mantine/core"
import React from "react"
import { StoryPostBy } from "./storyPostBy"
import { BlogPost } from "src/types/general"

export function StoryDetail({post}: { post: BlogPost}){


    return (
     <Base>

     <div className="max-w-2xl px-6 pt-6 pb-24 mx-auto space-y-12">

     <Image 
       src={`${process.env.STORAGE_PATH}/${post.image}`} 
       height={420}
       />

<p className="text-sm text-gray-400"> by <a rel="noopener noreferrer" href="#" target="_blank" className="underline text-green-400">
      <span itemProp="name">Mutenga Bamboo</span></a> on <time dateTime="2021-02-12 15:34:18-0200">Feb 12th 2021</time></p>

       
       <Divider my="sm" />
       <Title order={1}>{ post.title }</Title>

       <article className="">
        {post.content}
       </article>

         <StoryPostBy date={"16 Dec 2021"}/>

       </div>

     
     </Base>
    )
}