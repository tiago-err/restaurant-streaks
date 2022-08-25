import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import RestaurantCard from ".";
import mock from "./mock.json";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Example/Restaurant Card",
	component: RestaurantCard,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {},
} as ComponentMeta<typeof RestaurantCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RestaurantCard> = (args) => <RestaurantCard {...args} />;

export const Primary = Template.bind({});
Primary.args = mock.tomatino;

export const WithReward = Template.bind({});
WithReward.args = {...mock.tomatino, userAmount: 10};

export const H3 = Template.bind({});
H3.args = mock.h3;
