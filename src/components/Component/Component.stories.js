import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    property1: {
      options: ["frame-2", "frame-3"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-2",
    className: {},
    frameClassName: {},
    logoTrapilClassName: {},
    levClassName: {},
    lycEBascanClassName: {},
    logoStefClassName: {},
    logoRabotClassName: {},
    creditAgricoleLogoClassName: {},
    logoGerimClassName: {},
    logoTrapilClassNameOverride: {},
    levClassNameOverride: {},
  },
};
