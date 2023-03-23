import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from '@/components/common/Checkbox';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  argTypes: {
    title: { control: 'text', defaultValue: 'Button' },
    disabled: { control: 'boolean', defaultValue: false },
    checked: { control: 'boolean', defaultValue: false },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox checked={args.checked} onChange={(e) => {}}></Checkbox>
);

export const Primary = Template.bind({});
