import React from 'react';
import Button from '@/components/common/Button';
import Checkbox from '@/components/common/Checkbox';
import TextInput from '@/components/common/TextInput';
import styled from 'styled-components';
import Image from 'next/image';

import todoFriends from '@/public/assets/homepage/characters.png';
import todoFriendsCustom from '@/public/assets/homepage/characters-custom.png';
import welcome from '@/public/assets/homepage/welcome.png';
import text_intro from '@/public/assets/homepage/todofriends-text.png';
import header_line from '@/public/assets/homepage/main-line.png';
import text_hello from '@/public/assets/homepage/hello.png';
import todoFriendsHello from '@/public/assets/homepage/todofriends-hello.png';
import text_growup from '@/public/assets/homepage/growup.png';
import text_custom from '@/public/assets/homepage/custom.png';
import arrow_1 from '@/public/assets/homepage/arrow_1.png';
import arrow_2 from '@/public/assets/homepage/arrow_2.png';
import heart from '@/public/assets/homepage/heart.png';
import star from '@/public/assets/homepage/star.png';

const TodoFriends = styled(Image).attrs({
  src: todoFriends,
  alt: 'todoFriends',
})`
  padding: 10px;
`;

const TodoFriendsCustom = styled(Image).attrs({
  src: todoFriendsCustom,
  alt: 'todoFriendsCustom',
})``;

const Arrow_1 = styled(Image).attrs({
  src: arrow_1,
  alt: 'arrow_1',
})`
  position: absolute;
  left: 0;
  top: 43.5%;
`;

const Arrow_2 = styled(Image).attrs({
  src: arrow_2,
  alt: 'arrow_2',
})`
  position: absolute;
  right: 16px;
  top: 51%;
`;

const Heart1 = styled(Image).attrs({
  src: heart,
  alt: 'heart',
})`
  position: absolute;
  left: 34px;
  top: 52.5%;
`;

const Heart2 = styled(Image).attrs({
  src: heart,
  alt: 'heart',
})`
  position: absolute;
  right: 15%;
  top: 40.6%;
  width: 19.5px;
  height: auto;
  transform: rotate(45deg);
`;

const Star1 = styled(Image).attrs({
  src: star,
  alt: 'star',
})`
  position: absolute;
  left: 12%;
  top: 42%;
`;

const Star2 = styled(Image).attrs({
  src: star,
  alt: 'star',
})`
  position: absolute;
  right: 10%;
  top: 45%;
  width: 29.3px;
  height: auto;
`;

const Welcome = styled(Image).attrs({
  src: welcome,
  alt: 'welcome',
})`
  margin-top: 50px;
  margin-bottom: 40px;
`;

const TextIntro = styled(Image).attrs({
  src: text_intro,
  alt: 'text_intro',
})`
  margin-bottom: 40px;
`;

const HeaderLine = styled(Image).attrs({
  src: header_line,
  alt: 'header_line',
})`
  width: 100%;
`;

const TodoFriendsHello = styled(Image).attrs({
  src: todoFriendsHello,
  alt: 'todoFriendsHello',
})``;

const TextGrowup = styled(Image).attrs({
  src: text_growup,
  alt: 'text_growup',
})`
  margin-right: 175px;
`;

const TextHello = styled(Image).attrs({
  src: text_hello,
  alt: 'text_hello',
})`
  margin-left: 145px;
`;

const TextCustom = styled(Image).attrs({
  src: text_custom,
  alt: 'text_custom',
})`
  margin-left: 125px;
`;

const Header = styled.div`
  background-color: #f9f6f2;
  height: 638px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 750px;
  height: inherit;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: #ffffff;
  height: 1024px;
`;

const Section = styled.div`
  height: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  width: 360px;
`;

// 홈페이지 작업
const HomePage = () => {
  return (
    <div>
      <Header>
        <Container>
          <Arrow_1 />
          <Arrow_2 />
          <Heart1 />
          <Star1 />
          <Heart2 />
          <Star2 />
          <TodoFriendsCustom />
          <Welcome></Welcome>
          <TextIntro />
          <StyledButton>지금 바로 시작하기</StyledButton>
        </Container>
      </Header>
      <HeaderLine></HeaderLine>
      <Content>
        <Section>
          <TodoFriendsHello />
          <TextHello />
        </Section>
        <Section>
          <TextGrowup />
          <TodoFriends />
        </Section>
        <Section>
          <TodoFriendsCustom />
          <TextCustom />
        </Section>
      </Content>
    </div>
  );
};

export default HomePage;
