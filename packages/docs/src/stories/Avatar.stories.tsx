import { Meta, StoryObj} from '@storybook/react'
import {Avatar, AvatarProps, } from "@reinaldo-ignite-ui/react"



export default  {
    title: 'Data/Display',
    component: Avatar,

    args: {
      src: 'https://avatars.githubusercontent.com/u/55931337?v=4'
    }  
    
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
 
}

export const WithFallback: StoryObj<AvatarProps> = {
 args: {
    src: 'undefined'
 }
}