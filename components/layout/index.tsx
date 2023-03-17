import { DefaultTheme } from '@/styles/ColorPalette';
import Head from 'next/head';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>TODO Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Header />
        <BodyContainer>{children}</BodyContainer>
        <Footer />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${DefaultTheme.Neutral.N100};
`;

const BodyContainer = styled.div`
  width: 100%;
`;

export default Layout;

const WW = styled.input.attrs({ type: 'checkbox' })``;
