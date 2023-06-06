import { Meta, StoryObj } from "@storybook/react";
import { Box, Text, MultiStep, MultiStepContainerProps } from "@reinaldo-ignite-ui/react";

export default {
  component: MultiStep,
  title: "Form/MultiStep",

  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: 
    [
        (Story) => {
            return (
                
                    <Box as='label' css={{display: 'flex', flexDirection: 'column', gap: '$2'}}>
                     
                        {Story()}</Box>
            )
        }
    ]
  
} as Meta<MultiStepContainerProps>;

export const Primary: StoryObj<MultiStepContainerProps> = {} 


export const Full: StoryObj<MultiStepContainerProps> = {
    args: {
        currentStep: 4,
        
    }
} 