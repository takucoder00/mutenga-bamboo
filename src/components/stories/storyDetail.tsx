import Base from "@/pages/base"
import { Image, Title, Divider, Text } from "@mantine/core"
import React from "react"
import { StoryPostBy } from "./storyPostBy"
import { BlogPost } from "src/types/general"

export function StoryDetail({post}: { post: BlogPost}){


    return (
     <Base>

     <Image 
       src={`${process.env.STORAGE_PATH}/${post.image}`} 
       height={420} width={1000}
       />

       <StoryPostBy date={"16 Dec 2021"}/>
       <Divider my="sm" />
       <Title order={1}>{ post.title }</Title>
       
       <Text>
        {post.content}
       </Text>
     </Base>
    )
}