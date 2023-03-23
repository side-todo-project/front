import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '@/components/common/Button';

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    title: { control: 'text', defaultValue: 'Button' },
    disabled: { control: 'boolean', defaultValue: false },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button disabled={args.disabled}>{args.title}</Button>
);

export const Primary = Template.bind({});
