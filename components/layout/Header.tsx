import { FlexBox, layoutMarginStyle } from '@/styles/Utils';
import React, { memo } from 'react';
import styled from 'styled-components';

import {
  CalendarMenuButton,
  HamburgerMenuButton,
  NoticeMenuButton,
} from '@/views/header/MenuButton';
import LogoIcon from '@/views/header/LogoIcon';

const Header = () => {
  return (
    <Container>
      <Box>
        <LogoIcon />
        <Menu>
          <CalendarMenuButton />
          <NoticeMenuButton />
          <HamburgerMenuButton />
        </Menu>
      </Box>
    </Container>
  );
};

const Container = styled(FlexBox).attrs({ dir: 'row', justify: 'center' })`
  background-color: ${(p) => p.theme.White};
  width: 100%;
  height: 4rem;
`;

const Box = styled(FlexBox).attrs({ dir: 'row', justify: 'space-between' })`
  ${layoutMarginStyle};
  width: 100%;
`;

const Menu = styled(FlexBox).attrs({ dir: 'row', justify: 'space-between' })`
  width: 8.88rem;
  height: 1.5rem;
`;

export default memo(Header);
