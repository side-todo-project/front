import QueryMockTest from '@/components/common/QueryMockTest';
import UnitTestWrapper from '@/components/common/UnitTestWrapper';
import Mypage from '@/pages/mypage';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Schedule', () => {
  it('show default page', () => {
    const { getByText } = render(
      <UnitTestWrapper>
        <Mypage />
      </UnitTestWrapper>,
    );
    expect(getByText('오늘의 일정이 등록되어 있지 않아요!')).toBeInTheDocument();
  });

  it('add todo when click button', () => {
    const { getByText } = render(
      <UnitTestWrapper>
        <Mypage />
      </UnitTestWrapper>,
    );
    const addButton = screen.getByText('일정 등록하기');
    fireEvent.click(addButton);
    // expect(getByText('일정을 입력해주세요')).toBeInTheDocument();
  });

  // React-Query & Mock Service Worker 연동 테스트
  it('React-Query&MSW Test', async () => {
    render(
      <UnitTestWrapper>
        <QueryMockTest />
      </UnitTestWrapper>,
    );

    expect(await screen.findByText('test-id')).toBeInTheDocument();
    expect(await screen.findByText('test-name')).toBeInTheDocument();
  });
});
