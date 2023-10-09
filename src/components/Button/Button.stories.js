import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    property1: {
      options: ["s"],
      control: { type: "select" },
    },
    property2: {
      options: ["primary"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "s",
    property2: "primary",
    inactive: false,
    className: {},
    text: "Small Default",
  },
};
