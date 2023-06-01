import { Meta, StoryObj} from '@storybook/react'
import {Heading, HeadingProps} from "@ignite-ui/react"



export default  {
    title: 'Typhography/Heading',
    component: Heading,

    args: {
        children: 'Custom title'
    }  
    
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {
    args: {
        children:'H2 Heading',
        as: 'h2'
     }
     
}

export const CostumTag : StoryObj<HeadingProps> = {
 args: {
    children:'H1 Heading',
    as: 'h1'
 },
 parameters: {
    story: 'Por padrão o HEading sempre será um h2, mas podemos alterar isso com a propriedade "as" '
 }
}