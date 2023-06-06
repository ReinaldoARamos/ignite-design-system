import { Meta, StoryObj} from '@storybook/react'
import {Text, TextProps} from "@reinaldo-ignite-ui/react"



export default  {
    title: 'Typhography/Text',
    component: Text,

    args: {
        children: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc'
    }  
    
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
 
}

export const CostumTag : StoryObj<TextProps> = {
 args: {
    children:'Strong Text',
    as: 'strong'
 }
 
}