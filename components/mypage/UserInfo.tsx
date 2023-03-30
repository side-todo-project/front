import React from 'react';
import styled from 'styled-components';
import { FlexBox } from '@/styles/Utils';
import TextInput from '@/components/common/TextInput';
import Button from '@/components/common/Button';
import CharacterStatusView from '@/views/mypage/CharacterStatusView';

// 좌측 유저 상태 부분

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

const UserInfo = () => {
  return (
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
        <CharacterStatusView/>
      <FlexBox dir="row">
        <div>mission</div>
        <p>3일 연속 일정 클리어에 성공하기</p>
      </FlexBox>
    </CharacterFlexBox>
  );
};

export default UserInfo;
