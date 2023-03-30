import { ISchedule, IScheduleCreateForm, IScheduleItem } from '@/types/schedule';
import React, { useCallback, useEffect, useState } from 'react';
import Button from '@/components/common/Button';
import ScheduleInput from '@/components/mypage/ScheduleInput';
import TagInput from './TagInput';
import { createSchedule } from '@/api/client';

/**
 * 스케줄 등록 컴포넌트
 */
const defaultMockData: IScheduleCreateForm = {
  scheduleDate: '2022-03-01',
  schedule: [
    {
      when: '',
      what: '',
    },
  ],
  isPrivate: true,
  tags: ['태그1', '태그2'],
};

const RegisterSchedule = () => {
  const [form, setForm] = useState<IScheduleCreateForm>(defaultMockData);

  const onAdd = () => {
    setForm({
      ...form,
      schedule: [...form.schedule, { when: '', what: '' }],
    });
  };

  const onRemove = () => {
    setForm({
      ...form,
      schedule: form.schedule.slice(0, -1),
    });
  };

  const onSubmit = async () => {
    try {
      await createSchedule(form);
      
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div data-testid="date">{form.scheduleDate} 나의 일정</div>
      <div>
        <p>add todo</p>
        {form.schedule.map((item, index) => (
          <ScheduleInput
            key={`${item.when}-${item.what}`}
            when={item.when}
            what={item.what}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        ))}
      </div>
      <div>
        <TagInput tags={form.tags} />
      </div>
      <Button width="100%" onClick={onSubmit}>일정 등록하기</Button>
    </div>
  );
};

export default RegisterSchedule;