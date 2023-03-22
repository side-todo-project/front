import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from '@/components/layout/Header';

export default {
  title: 'Header/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const Primary = Template.bind({});
