import { PropertyLogoWoWrapper } from ".";

export default {
  title: "Components/PropertyLogoWoWrapper",
  component: PropertyLogoWoWrapper,
  argTypes: {
    property1: {
      options: ["logo-wo-subtitle", "collapsed"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "logo-wo-subtitle",
  },
};
