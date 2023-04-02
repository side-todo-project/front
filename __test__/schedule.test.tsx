import UnitTestWrapper from '@/components/common/UnitTestWrapper';
import ConfigSchedule from '@/components/mypage/ConfigSchedule';
import EmptySchedule from '@/components/mypage/EmptySchedule';
import Mypage from '@/pages/mypage';
import { fireEvent, render, screen } from '@testing-library/react';

describe('등록된 일정 없는 경우', () => {
  it('일정 등록하기 버튼이 보여야 한다.', () => {
    render(
      <UnitTestWrapper>
        <Mypage />
      </UnitTestWrapper>,
    );
    expect(screen.getByText('오늘의 일정이 등록되어 있지 않아요!')).toBeInTheDocument();
  });

  it('일정 생성버튼 클릭시 등록바튼이 사라진다.', () => {
    render(
      <UnitTestWrapper>
        <Mypage />
      </UnitTestWrapper>,
    );
    const element = screen.getByText('오늘의 일정이 등록되어 있지 않아요!');
    const addButton = screen.getByText('일정 등록하기');

    fireEvent.click(addButton);
    expect(element).not.toBeInTheDocument();
  });

  it('일정 생성버튼 클릭시 일정 생성폼이 보여진다.', () => {
    render(
      <UnitTestWrapper>
        <Mypage />
      </UnitTestWrapper>,
    );
    const addButton = screen.getByText('일정 등록하기');

    fireEvent.click(addButton);

    const formElement = screen.getByTestId('config-schedule-form');
    expect(formElement).toBeInTheDocument();
  });

  it('하단에 일정 등록하기 버튼이 나타난다.', () => {
    render(
      <UnitTestWrapper>
        <Mypage />
      </UnitTestWrapper>,
    );
    const addButton = screen.getByText('일정 등록하기');

    fireEvent.click(addButton);

    const formElement = screen.getByTestId('config-schedule-form');
    expect(formElement).toBeInTheDocument();
  });

  it('Todo add 추가시 todo form 추가', () => {
    render(
      <UnitTestWrapper>
        <EmptySchedule />
      </UnitTestWrapper>,
    );
    const addButton = screen.getByText('일정 등록하기');
    fireEvent.click(addButton);

    const todoForm = screen.getByTestId('todo-when-what');
    expect(todoForm).toBeInTheDocument();

    const addTodoButton = screen.getByText('add');
    fireEvent.click(addTodoButton);
    // todo 총 2개
    expect(screen.getAllByTestId('todo-when-what')).toHaveLength(2);
  });

  it('Todo delete 시 제거', () => {
    render(
      <UnitTestWrapper>
        <EmptySchedule />
      </UnitTestWrapper>,
    );
    const addButton = screen.getByText('일정 등록하기');
    fireEvent.click(addButton);

    const todoForm = screen.getByTestId('todo-when-what');
    expect(todoForm).toBeInTheDocument();

    const addTodoButton = screen.getByText('add');
    fireEvent.click(addTodoButton);
    // todo 총 2개
    expect(screen.getAllByTestId('todo-when-what')).toHaveLength(2);
    // find first element
    const deleteTodoButton = screen.getAllByText('delete')[0];
    fireEvent.click(deleteTodoButton);

    // todo 총 1개
    expect(screen.getAllByTestId('todo-when-what')).toHaveLength(1);
  });


});

describe('일정 추가', () => {});
