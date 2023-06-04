import { Meta, StoryObj } from "@storybook/react";
import { Box, CheckBox, Text, CheckBoxContainerPros } from "@ignite-ui/react";

export default {
  component: CheckBox,
  title: "Form/CheckBox",

  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", gap: "$2", flexDirection: 'row', alignItems: "center"}}
        >
          {Story()}
          <Text>Accept Terms of use</Text>
        </Box>
      );
    },
  ],
} as Meta<CheckBoxContainerPros>;

export const Primary: StoryObj<CheckBoxContainerPros> = {};
