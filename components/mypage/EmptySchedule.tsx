import { FlexBox } from '@/styles/Utils';
import Button from '@/components/common/Button';
import React, { useState } from 'react';
import { initialScheduleData } from '@/constants/initailData';
import ConfigSchedule from './ConfigSchedule';

// 저장된 일정 없을때
const EmptySchedule = () => {
  const [isConfigMode, setIsConfigMode] = useState(false);

  const onClickToConfig = () => {
    setIsConfigMode(true);
  };

  if (isConfigMode) return <ConfigSchedule />;

  return (
    <FlexBox dir="row">
      <FlexBox dir="column">
        <p>오늘의 일정이 등록되어 있지 않아요!</p>
        <Button width="100%" onClick={onClickToConfig}>
          일정 등록하기
        </Button>
      </FlexBox>
    </FlexBox>
  );
};

export default EmptySchedule;
