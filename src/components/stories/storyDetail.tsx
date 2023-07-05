import Base from "@/pages/base"
import {  Image, Title, Divider, Text } from "@mantine/core"
import React from "react"
import { StoryPostBy } from "./storyPostBy"
import { BlogPost } from "src/types/general"

import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { storageEndpoint } from "src/global"
import { formatPostDate } from "src/utils/general"


export function StoryDetail({post}: { post: BlogPost}){




  if (!post) return (<></>)



  let postContent = post.content


    return (
     <Base>

     <div className="max-w-6xl px-6 pt-6 pb-24 mx-auto space-y-12">

     <Image
       src={`${storageEndpoint}/${post.image}`} 
       height={"100%"}
       width={"100%"}

       />

<p className="text-sm text-gray-400"> by <a rel="noopener noreferrer" href="#" target="_blank" className="underline text-green-400">
      <span itemProp="name">Mutenga Bamboo</span></a> on <time dateTime={post.updated_at}>{formatPostDate(post.updated_at)}</time></p>

       
       <Divider my="sm" />
       <Title order={1}>{ post.title }</Title>

       <ReactMarkdown remarkPlugins={[gfm]}>
        { postContent }
       </ReactMarkdown>

         <StoryPostBy date={formatPostDate(post.updated_at)}/>

       </div>

     
     </Base>
    )
}