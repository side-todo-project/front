import { defaultQueryOptions } from '@/constants';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';

const queryClient = new QueryClient();
//set default
queryClient.setDefaultOptions({
  queries: defaultQueryOptions,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Reset />
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
          <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

const GlobalStyles = createGlobalStyle``;
