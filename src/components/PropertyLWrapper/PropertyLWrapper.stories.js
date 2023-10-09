import { PropertyLWrapper } from ".";

export default {
  title: "Components/PropertyLWrapper",
  component: PropertyLWrapper,
  argTypes: {
    property1: {
      options: ["l"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "l",
    secondaryDisabled: false,
    className: {},
    text: "GHOST",
  },
};
