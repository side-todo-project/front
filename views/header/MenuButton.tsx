import headerHamburger from '@/public/assets/header/header-hamburger.svg';
import headerCalendar from '@/public/assets/header/header-calendar.svg';
import headerNotice from '@/public/assets/header/header-notice.svg';
import styled from 'styled-components';
import Image from 'next/image';

const ImageButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  corsor: pointer;
`;

const MenuButton = ({ src, alt }) => (
  <ImageButton>
    <Image src={src} width={24} height={24} alt={alt} />
  </ImageButton>
);

export const HamburgerMenuButton = () => <MenuButton src={headerHamburger} alt="menu" />;
export const CalendarMenuButton = () => <MenuButton src={headerCalendar} alt="menu" />;
export const NoticeMenuButton = () => <MenuButton src={headerNotice} alt="menu" />;
