import Button from '@/components/common/Button';
import { FlexBox } from '@/styles/Utils';
import React from 'react';
import styled from 'styled-components';

const mypage = () => {
  return (
    <Container className='123123123123123123123123123123213123'>
      {/* 좌측 */}
      <FlexBox dir="column">
        <FlexBox dir="row">
          <p>순빵999</p>
          <p>시작한지 1일쩨</p>
        </FlexBox>
        <FlexBox dir="row">
          <input></input>
          <Button>확인</Button>
        </FlexBox>
        <div>이미지</div>
        <FlexBox dir="row"></FlexBox>
      </FlexBox>
      {/* 우측 */}
      <FlexBox dir="column">
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
      </FlexBox>
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid black;
  background-color: green;

`

const CharacterFlexBox = styled(FlexBox).attrs({ dir: 'column' })`
  width: 50%;
`

const ScheduleFlexBox = styled(FlexBox).attrs({ dir: 'column' })`
  width: 50%;
`

export default mypage;
