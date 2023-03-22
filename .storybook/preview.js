import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import Palette from '@/styles/Palette';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// storybook 컴포넌트 내에 provider로 wrapping
addDecorator((story) => <ThemeProvider theme={Palette}>{story()}</ThemeProvider>);
