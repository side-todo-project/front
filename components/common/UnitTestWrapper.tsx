import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import Palette from '@/styles/Palette';

/**
 * Unit Test를 위한 Wrapper
 */

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const UnitTestWrapper = ({ children }) => {
  return (
    <ThemeProvider theme={Palette}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
};

export default UnitTestWrapper;
