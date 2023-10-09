import { Notification } from ".";

export default {
  title: "Components/Notification",
  component: Notification,
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
