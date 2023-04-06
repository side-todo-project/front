import UnitTestWrapper from '@/components/common/UnitTestWrapper';
import ConfigSchedule from '@/components/mypage/ConfigSchedule';
import Mypage from '@/pages/mypage';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Mypage: empty schedule', () => {
  beforeEach(() => {
    render(
      <UnitTestWrapper>
        <Mypage scheduleId={1}/>
      </UnitTestWrapper>,
    );
  });

  it('일정 등록하기 버튼이 보여야 한다.', async () => {
    expect(await screen.findByText('오늘의 일정이 등록되어 있지 않아요!')).toBeInTheDocument();
  });

  it('일정 생성버튼 클릭시 등록바튼이 사라진다.', async () => {
    const element = await screen.findByText('오늘의 일정이 등록되어 있지 않아요!');
    const addButton = await screen.findByText('일정 등록하기');

    fireEvent.click(addButton);
    expect(element).not.toBeInTheDocument();
  });
});

describe('ConfigSchedule Test', () => {
  beforeEach(() => {
    render(
      <UnitTestWrapper>
        <ConfigSchedule />
      </UnitTestWrapper>,
    );
  });

  it('일정 생성버튼 클릭시 일정 생성폼이 보여진다.', () => {
    const formElement = screen.getByTestId('config-schedule-form');
    expect(formElement).toBeInTheDocument();
  });

  it('하단에 일정 등록하기 버튼이 나타난다.', () => {
    const formElement = screen.getByTestId('config-schedule-form');
    expect(formElement).toBeInTheDocument();
  });

  it('Todo add 추가시 todo form 추가', () => {
    const todoForm = screen.getByTestId('todo-when-what');
    expect(todoForm).toBeInTheDocument();

    const addTodoButton = screen.getByText('add');
    fireEvent.click(addTodoButton);
    // todo 총 2개
    expect(screen.getAllByTestId('todo-when-what')).toHaveLength(2);
  });

  it('Todo delete 시 제거', () => {
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
