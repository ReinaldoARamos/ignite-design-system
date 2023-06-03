import { Meta, StoryObj } from "@storybook/react";
import { Box, Text, TextArea, TextAreaProps } from "@ignite-ui/react";

export default {
  component: TextArea,
  title: "Form/TextArea",

  args: {},
  decorators: 
    [
        (Story) => {
            return (
                
                    <Box as='label' css={{display: 'flex', flexDirection: 'column', gap: '$2'}}>
                      <Text >E-mail adress</Text>
                        {Story()}</Box>
            )
        }
    ]
  
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
    args: {
        placeholder: 'type your name'
    }
};

export const WithPrefix: StoryObj<TextAreaProps> = {
  args: {
    prefix: "call.com",
  },
};


export const Disabled: StoryObj<TextAreaProps> = {
    args: {
    disabled: true,
    },
  };