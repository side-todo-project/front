import Palette from '@/styles/Palette';
import { FlexBox, layoutMarginStyle } from '@/styles/Utils';
import Head from 'next/head';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${Palette.Neutral.N100};
`;

const BodyContainer = styled.div`
  ${layoutMarginStyle};
  width: 100%;
`;

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
        <FlexBox dir="row" justify="center">
          <BodyContainer>{children}</BodyContainer>
        </FlexBox>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
