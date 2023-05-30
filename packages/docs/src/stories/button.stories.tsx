import {Button} from "@ignite-ui/react"
import { Meta, StoryObj} from '@storybook/react'

export default  {
    title: 'Button',
    component: Button,

    args: {
        children: "Enviar"
    }
    
} as Meta

export const Primary: StoryObj = {
    
}
export const Big: StoryObj = {
    args: {size: 'big'}
}