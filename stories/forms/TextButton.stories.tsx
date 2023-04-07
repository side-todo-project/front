import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextButton from '@/components/common/TextButton';

export default {
  title: 'Form/TextButton',
  component: TextButton,
  argTypes: {
    title: { control: 'text', defaultValue: '텍스트 버튼' },
  },
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = (args) => <TextButton>{args.title}</TextButton>;

export const Primary = Template.bind({});
