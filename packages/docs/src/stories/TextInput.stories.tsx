import { Meta, StoryObj } from "@storybook/react";
import { Box, Text, TextInput, TextInputProps } from "@reinaldo-ignite-ui/react";

export default {
  component: TextInput,
  title: "Form/TextInput",

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
  
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'type your name'
    }
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: "call.com",
    placeholder: "type your name"
  },
};


export const Disabled: StoryObj<TextInputProps> = {
    args: {
    disabled: true,
    },
  };