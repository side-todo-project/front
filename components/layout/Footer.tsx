import React, { memo } from 'react';
import styled from 'styled-components';
import LogoIcon from '@/views/header/LogoIcon';
import { FlexBox, layoutMarginStyle } from '@/styles/Utils';

import copyright from '@/public/assets/footer/copyright.png';
import contact from '@/public/assets/footer/contact_todofriends.png';
import Image from 'next/image';

const Container = styled.div`
  background-color: #f9f6f2;
  height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  justify-content: center;
  align-items: start;
`;

const Copyright = styled(Image).attrs({
  src: copyright,
  alt: 'copyright',
})``;

const Contact = styled(Image).attrs({
  src: contact,
  alt: 'contact',
})``;

const Text = styled.div`
  margin-top: 22.5px;
  display: grid;
  gap: 100%;
  grid-auto-flow: column;
`;

const Footer = () => {
  return (
    <Container>
      <Box>
        <LogoIcon />
        <Text>
          <Copyright />
          <Contact />
        </Text>
      </Box>
    </Container>
  );
};

export default memo(Footer);
