import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import Component from ".";
import {COLORS} from "../../public/shared/colors";
import mock from "./mock.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Example/Restaurant Carousel",
	component: Component,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof Component>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {restaurants: mock};
