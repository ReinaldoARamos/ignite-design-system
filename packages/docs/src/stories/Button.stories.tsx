import { Meta, StoryObj} from '@storybook/react'
import {Button, ButtonProps} from "@ignite-ui/react"
import { ArrowBigLeft, ArrowLeft, ArrowRight } from 'lucide-react'




export default  {
    title: 'form/Button',
    component: Button,

    args: {
        children: 'Send'
    }  
    
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
 
}

export const Secondary: StoryObj<ButtonProps> = {
 args: {
    variant: 'secondary',
    children: 'Create new '
 }
}


export const Tartiary: StoryObj<ButtonProps> = {
    args: {
       variant: 'tertiary',
       children: 'cancel'
    }
   }

   export const Small: StoryObj<ButtonProps> = {
 args: {
    size: 'sm' 
 }
   }
   
   
   export const Disabled: StoryObj<ButtonProps> = {
    args: {
     disabled: true
    }
      }

      
   
   export const WithIcon: StoryObj<ButtonProps> = {
    args: {
     children: (
        <>
        Próximo passo  <ArrowRight />
        </>
     )
    }
      }
      