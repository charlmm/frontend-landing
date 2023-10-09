import { RightTopNav } from ".";

export default {
  title: "Components/RightTopNav",
  component: RightTopNav,
  argTypes: {
    property1: {
      options: ["profile", "notification", "callender", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "profile",
    className: {},
  },
};
