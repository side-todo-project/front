import Button from '@/components/common/Button';
import { FlexBox } from '@/styles/Utils';
import React from 'react';
import styled from 'styled-components';
import characterFirst from '@/public/assets/header/character-first.svg';
import Image from 'next/image';
import Palette from '@/styles/Palette';
import TextInput from '@/components/common/TextInput';

const mypage = () => {
  return (
    <Container>
      {/* 좌측 */}
      <CharacterFlexBox>
        <FlexBox dir="column" justify="space-between" className="title-box">
          <FlexBox dir="row">
          <p>순빵999</p>
          <p>시작한지 1일쩨</p>
          </FlexBox>
          <FlexBox dir="row" className="introduction-box">
            <TextInput />
            <Button>확인</Button>
          </FlexBox>
        </FlexBox>
        <Image src={characterFirst} alt="character-first" width={220.6} height={274.4} />
        <FlexBox dir="row">
          <div>mission</div>
          <p>3일 연속 일정 클리어에 성공하기</p>
        </FlexBox>
      </CharacterFlexBox>
      {/* 우측 */}
      <ScheduleFlexBox>
        <FlexBox dir="row">
          <div>월</div>
          <div>화</div>
          <div>수</div>
          <div>목</div>
          <div>금</div>
          <div>토</div>
          <div>일</div>
        </FlexBox>
        <FlexBox dir="row">
          <FlexBox dir="column">
            <p>오늘의 일정이 등록되어 있지 않아요!</p>
            <Button width={360}>일정 등록하기</Button>
          </FlexBox>
        </FlexBox>
      </ScheduleFlexBox>
    </Container>
  );
};

const Container = styled(FlexBox).attrs({ dir: 'row' })`
  width: 100%;
  height: 43.75rem;
`;

const CharacterFlexBox = styled(FlexBox).attrs({ dir: 'column', justify: 'space-between' })`
  width: 50%;
  height: 100%;
  background-color: orange;
  .title-box {
    height: 100px;
    width: 100%;
    background-color: green;
  }
  .introduction-box {
    width: 100%;
    height: 44px;
    background-color: yellow;
  }
`;

const ScheduleFlexBox = styled(FlexBox).attrs({ dir: 'column' })`
  width: 50%;
  height: 100%;
  border-radius: 20px;
  background-color: ${Palette.White};
`;

export default mypage;
