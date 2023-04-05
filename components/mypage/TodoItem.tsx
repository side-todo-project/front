import { FlexBox } from '@/styles/Utils';
import React, { ChangeEvent, memo, useCallback } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

interface IProps {
  itemKey: number;
  when: string;
  what: string;
  onAddTodo: () => void;
  onRemoveTodo: (key: number) => void;
  onChangeTodo: (kind: 'when' | 'what', key: number, e: ChangeEvent<HTMLInputElement>) => void;
}

const WhenInput = styled.input``;

const WhatInput = styled.input``;

const TodoItem = ({ itemKey, when, what, onAddTodo, onRemoveTodo, onChangeTodo }: IProps) => {
  const onClickRemove = useCallback(() => {
    onRemoveTodo(itemKey);
  }, []);

  return (
    <FlexBox dir="row" key={itemKey} data-testid="todo-when-what">
      <p>{itemKey}</p>
      <WhenInput value={when} onChange={(e) => onChangeTodo('when', itemKey, e)} />
      <WhatInput value={what} onChange={(e) => onChangeTodo('what', itemKey, e)} />
      <Button onClick={onAddTodo}>add</Button>
      <Button onClick={onClickRemove}>delete</Button>
    </FlexBox>
  );
};

export default memo(TodoItem);
