import { FlexBox, layoutMarginStyle } from '@/styles/Utils';
import React, { memo } from 'react';
import styled from 'styled-components';
// comment
import {
  CalendarMenuButton,
  HamburgerMenuButton,
  NoticeMenuButton,
} from '@/views/header/MenuButton';
import LogoIcon from '@/views/header/LogoIcon';
import { useUserInfo } from '@/hooks/userProvider';
import { useRouter } from 'next/router';
import TextButton from '../common/TextButton';

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

const Header = () => {
  const { user } = useUserInfo();
  const router = useRouter();

  const onClickLoginButton = () => router.push('/login');

  return (
    <Container>
      <Box>
        <LogoIcon />
        <Menu>
          {user ? (
            <>
              <CalendarMenuButton />
              <NoticeMenuButton />
              <HamburgerMenuButton />
            </>
          ) : (
            <TextButton onClick={onClickLoginButton}>로그인</TextButton>
          )}
        </Menu>
      </Box>
    </Container>
  );
};

export default memo(Header);
