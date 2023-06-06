import { Meta, StoryObj} from '@storybook/react'
import {Box, BoxProps} from "@reinaldo-ignite-ui/react"




export default  {
    title: 'Surfaces/Box',
    component: Box,

    args: {
        children: (
            <>
            <p>Testando o elemento box</p>
            </>
        )
    }  
    
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
 
}