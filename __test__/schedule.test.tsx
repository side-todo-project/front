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
    expect(getByText('일정 등록하기')).toBeInTheDocument();
  });

  it('일정 ', () => {

  })
});


describe('일정 추가', () => {
});