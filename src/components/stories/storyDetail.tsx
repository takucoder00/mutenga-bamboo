import Base from "@/pages/base"
import { Image, Title } from "@mantine/core"
import React from "react"
import { StoryPostBy } from "./storyPostBy"





export function StoryDetail(){


    return (
     <Base>

     <Image 
       src={"https://images.unsplash.com/photo-1687789256307-839c77ed376d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1033&q=80"} 
       height={420} width={1000}
       />

       <StoryPostBy date={"16 Dec 2021"}/>

       <Title order={1}>President Emmerson Mnangawnan did so and so</Title>

       



     
     </Base>
    )
}