import { Profile } from ".";

export default {
  title: "Components/Profile",
  component: Profile,
  argTypes: {
    property1: {
      options: ["hover", "active", "default"],
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
