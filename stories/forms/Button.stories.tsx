import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextInput from '@/components/common/TextInput';

export default {
  title: 'Form/Button',
  component: TextInput,
  argTypes: {
    isError: { control: 'boolean' },
    
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isError: true,
  errorText: '에러 발생',
  placeholder: 'Input Text'
}