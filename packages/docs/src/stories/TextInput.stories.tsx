import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputProps } from "@ignite-ui/react";

export default {
  component: TextInput,
  title: "Form/TextInput",

  args: {},
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: "call.com",
  },
};


export const Disabled: StoryObj<TextInputProps> = {
    args: {
    disabled: true,
    },
  };