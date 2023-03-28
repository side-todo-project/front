import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import todoFriendsLogo from '@/public/assets/header/todo-friends-logo.png';

const LogoIcon = styled(Image).attrs({
  src: todoFriendsLogo,
  alt: 'todo-friends-logo',
  width: 100,
  height: 100,
})`
  width: 11.19rem;
  height: 1.13rem;
`;

export default LogoIcon;
