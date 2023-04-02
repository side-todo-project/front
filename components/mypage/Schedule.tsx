import { ISchedule } from '@/types/schedule';
import React, { useState } from 'react';
import Button from '../common/Button';
import ConfigSchedule from './ConfigSchedule';

/**
 * 등록된 일정
 */

interface IProps {
  data: ISchedule;
}

const Schedule = ({ data }: IProps) => {
  const { scheduleDate, schedule, isPrivate, tags } = data;
  const [isConfigMode, setIsConfigMode] = useState(false);
  const onClickToConfig = () => {
    setIsConfigMode(true);
  };

  if (isConfigMode) {
    return (
      <ConfigSchedule
        initialData={{
          scheduleDate,
          schedule,
          isPrivate,
          tags,
        }}
      />
    );
  }

  return (
    <div>
      <Button width="100%" onClick={onClickToConfig}>
        일정 수정하기
      </Button>
    </div>
  );
};

export default Schedule;
