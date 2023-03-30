import { FlexBox } from '@/styles/Utils';
import { IScheduleItem } from '@/types/schedule';
import React, { memo, useState } from 'react';

/**
 * 투두 입력 컴포넌트
 */
interface IProps {
  when: IScheduleItem['when'];
  what: IScheduleItem['what'];
  onAdd: () => void;
  onRemove: () => void;
}

const ScheduleTodoInput = ({ when, what, onAdd, onRemove }: IProps) => {
  const [whenInput, setWhenInput] = useState(when || '');
  const [whatInput, setWhatInput] = useState(what || '');

  return (
    <FlexBox dir="row">
      <input value={whenInput} onChange={(e) => setWhenInput(e.target.value)} />
      <input value={whatInput} onChange={(e) => setWhatInput(e.target.value)} />
      <button onClick={onAdd}>add</button>
      <button onClick={onRemove}>delete</button>
    </FlexBox>
  );
};

export default memo(ScheduleTodoInput);
