import { Calender } from ".";

export default {
  title: "Components/Calender",
  component: Calender,
  argTypes: {
    property1: {
      options: ["hover", "selected", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "hover",
    className: {},
  },
};
