import { random } from 'lodash';
import { IScheduleCreateForm } from '@/types/schedule';
import React, { useState } from 'react';
import Button from '@/components/common/Button';
import { createSchedule } from '@/api/client';
import styled from 'styled-components';
import { FlexBox } from '@/styles/Utils';
import TagInput from '@/components/mypage/TagInput';

// create key
const createTodoKey = () => {
  return random(1000, 9999);
};

/* ---------------------------------- 임시 추가 --------------------------------- */
const WhenInput = styled.input``;

const WhatInput = styled.input``;

interface IProps {
  initialData: IScheduleCreateForm;
}

// 스케줄 생성/수정
const ConfigSchedule = ({ initialData }: IProps) => {
  const [form, setForm] = useState<IScheduleCreateForm>(() => ({
    ...initialData,
    schedule: initialData.schedule.map((item) => {
      return { ...item, key: createTodoKey() };
    }),
  }));

  const onAdd = () => {
    setForm({
      ...form,
      schedule: [...form.schedule, { when: '', what: '', key: createTodoKey() }],
    });
  };

  const onRemove = (key: number) => {
    setForm({
      ...form,
      schedule: form.schedule.filter((item) => item.key !== key),
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
        <FlexBox dir="column">
          {form.schedule.map((item) => (
            <FlexBox dir="row" key={item.key} data-testid="todo-when-what">
              <p>{item.key}</p>
              <WhenInput value={item.when} />
              <WhatInput value={item.what} />
              <Button onClick={onAdd}>add</Button>
              <Button onClick={() => onRemove(item.key)}>delete</Button>
            </FlexBox>
          ))}
        </FlexBox>
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
