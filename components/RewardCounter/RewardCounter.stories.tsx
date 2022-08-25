import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import Component from ".";
import {COLORS} from "../../public/shared/colors";
import mock from "./mock.json";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Example/Reward Counter",
	component: Component,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof Component>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = mock.tomatino;

export const Full = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Full.args = {...mock.tomatino, userAmount: 10};

export const H3 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
H3.args = mock.h3;
