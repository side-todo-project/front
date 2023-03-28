import UnitTestWrapper from '@/components/common/UnitTestWrapper';
import Mypage from '@/pages/mypage';
import { fireEvent, render, screen } from '@testing-library/react';


describe('등록된 일정 없는 경우', () => {
  it('일정 등록하기 버튼이 보여야 한다.', () => {
    const { getByText } = render(
      <UnitTestWrapper>
        <Mypage />
      </UnitTestWrapper>
    );
    expect(getByText('오늘의 일정이 등록되어 있지 않아요!')).toBeInTheDocument();
  });


  it('일정 생성버튼 클릭시 등록바튼이 사라진다.', () => {
    const { getByText } = render(
      <UnitTestWrapper>
        <Mypage />
      </UnitTestWrapper>
    );
    const addButton = screen.getByText('일정 등록하기');
    fireEvent.click(addButton);
    expect(getByText('오늘의 일정이 등록되어 있지 않아요!')).not.toBeInTheDocument();
  })

  it('일정 생성버튼 클릭시 일정 생성폼이 보여진다.', () => {

  })
      
  it('오늘날짜+나의 일정이 표시된다.', () => {});
  it('비공개 체크박스가 나타난다.', () => {});
  it('해시태그 입력창이 생성된다.', () => {});
  it('하단에 일정 추가 버튼이 나타난다.', () => {});


  it('일정 생성 취소시 다시 처음페이지로 돌아간다', () => {
    
  })
});


describe('일정 추가', () => {
});