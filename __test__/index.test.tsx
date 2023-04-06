import QueryMockTest from '@/components/common/QueryMockTest';
import UnitTestWrapper from '@/components/common/UnitTestWrapper';
import Mypage from '@/pages/mypage';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Schedule', () => {
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
