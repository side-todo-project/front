import { FlexBox } from '@/styles/Utils';
import React from 'react';
import Button from '@/components/common/Button';

// 저장된 일정 없을때
const EmptySchedule = ({ onClick }) => {
  return (
    <FlexBox dir="row">
      <FlexBox dir="column">
        <p>오늘의 일정이 등록되어 있지 않아요!</p>
        <Button width="100%" onClick={onClick}>
          일정 등록하기
        </Button>
      </FlexBox>
    </FlexBox>
  );
};

export default EmptySchedule;
