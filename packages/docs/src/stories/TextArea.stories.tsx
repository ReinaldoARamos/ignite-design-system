import { Meta, StoryObj } from "@storybook/react";
import { Box, Text, TextArea, TextAreaProps } from "@reinaldo-ignite-ui/react";

export default {
  component: TextArea,
  title: "Form/TextArea",

  args: {},
  decorators: 
    [
        (Story) => {
            return (
                
                    <Box as='label' css={{display: 'flex', flexDirection: 'column', gap: '$2'}}>
                      <Text >Observations</Text>
                        {Story()}</Box>
            )
        }
    ]
  
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
    args: {
        placeholder: 'Add Observation'
    }
}
