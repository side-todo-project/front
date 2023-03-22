import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextInput from '@/components/common/TextInput';
import Button from '@/components/common/Button';

export default {
  title: 'Form/Button',
  component: TextInput,
  argTypes: {
    title: { control: 'text', defaultValue: 'Button' },
    disabled: { control: 'boolean', defaultValue: false },
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <Button disabled={args.disabled}>{args.title}</Button>;

export const Primary = Template.bind({});
