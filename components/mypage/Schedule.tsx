import { ISchedule, IScheduleItem } from '@/types/schedule';
import React, { useCallback, useState } from 'react';
import ScheduleInput from './ScheduleInput';

interface IProps {
  scheduleData: ISchedule;
}

const Schedule = ({ scheduleData }: IProps) => {
  const [scheduleItems, setScheduleItems] = useState(scheduleData.schedule);

  return (
    <div>
      <div data-testid="date">{scheduleData.scheduleDate} 나의 일정</div>
      {scheduleItems.map((item, index) => (
        <ScheduleInput when={item.when} what={item.what} />
      ))}
    </div>
  );
};

export default Schedule;
