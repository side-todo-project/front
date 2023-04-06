import { random } from 'lodash';
import { IScheduleCreateForm } from '@/types/schedule';
import React, { ChangeEvent, useCallback, useState } from 'react';
import Button from '@/components/common/Button';
import { createSchedule } from '@/api/client';
import { FlexBox } from '@/styles/Utils';
import TagInput from '@/components/mypage/TagInput';
import { initialScheduleData } from '@/constants/initailData';
import TodoItem from './TodoItem';

// create key
const createTodoKey = () => {
  return random(1000, 9999);
};

/* ---------------------------------- 임시 추가 --------------------------------- */
interface IProps {
  initialData?: IScheduleCreateForm;
}

// 스케줄 생성/수정
const ConfigSchedule = ({ initialData = initialScheduleData }: IProps) => {
  const [form, setForm] = useState<IScheduleCreateForm>(() => ({
    ...initialData,
    schedule: initialData.schedule.map((item) => {
      return { ...item, key: createTodoKey() };
    }),
  }));

  const onAddTodo = useCallback(() => {
    setForm((prevState) => {
      return {
        ...prevState,
        schedule: [...prevState.schedule, { when: '', what: '', key: createTodoKey() }],
      };
    });
  }, []);

  const onRemoveTodo = useCallback((key: number) => {
    setForm((prevState) => {
      return {
        ...prevState,
        schedule: prevState.schedule.filter((item) => item.key !== key),
      };
    });
  }, []);

  const onSubmit = async () => {
    try {
      await createSchedule(form);
    } catch (e) {
      console.error(e);
    }
  };

  const onChangeTodo = useCallback(
    (kind: 'when' | 'what', key: number, e: ChangeEvent<HTMLInputElement>) => {
      setForm((prevState) => {
        return {
          ...prevState,
          schedule: prevState.schedule.map((item) => {
            if (item.key === key) {
              return { ...item, [kind]: e.target.value };
            }
            return item;
          }),
        };
      });
    },
    [],
  );
  // todo 키는 랜덤해시 생성하여 사용
  return (
    <div data-testid="config-schedule-form">
      <div data-testid="date">{form.scheduleDate} 나의 일정</div>
      <div>
        <p>add todo</p>
        <FlexBox dir="column">
          {form.schedule.map((item) => (
            <TodoItem
              key={item.key}
              itemKey={item.key}
              when={item.when}
              what={item.what}
              onAddTodo={onAddTodo}
              onRemoveTodo={onRemoveTodo}
              onChangeTodo={onChangeTodo}
            />
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
