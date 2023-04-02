import { IScheduleCreateForm } from '@/types/schedule';
import React, { useState } from 'react';
import Button from '@/components/common/Button';
import ScheduleTodoInput from '@/components/mypage/ScheduleTodoInput';
import { createSchedule } from '@/api/client';
import TagInput from './TagInput';

const defaultMockData: IScheduleCreateForm = {
  scheduleDate: '2022-03-01',
  schedule: [
    {
      when: '일어니서',
      what: '씻기',
    },
  ],
  isPrivate: true,
  tags: ['태그1', '태그2'],
};
// 스케줄 생성/수정
const ConfigSchedule = () => {
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
  // todo 키는 랜덤해시 생성하여 사용
  return (
    <div data-testid="config-schedule-form">
      <div data-testid="date">{form.scheduleDate} 나의 일정</div>
      <div>
        <p>add todo</p>
        {form.schedule.map((item) => (
          <ScheduleTodoInput
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
      <Button data-testid="config-submit-btn" width="100%" onClick={onSubmit}>
        일정 등록하기
      </Button>
    </div>
  );
};

export default ConfigSchedule;
