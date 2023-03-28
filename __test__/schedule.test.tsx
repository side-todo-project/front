import Mypage from '@/pages/mypage';
import Palette from '@/styles/Palette';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

// use themeprovider wrapper
const Wrapper = ({ children }) => {
  return <ThemeProvider theme={Palette}>{children}</ThemeProvider>;
};

describe('Schedule', () => {
  it('show default page', () => {
    const { getByText } = render(
      <Wrapper>
        <Mypage />
      </Wrapper>
    );
    expect(getByText('오늘의 일정이 등록되어 있지 않아요!')).toBeInTheDocument();
  });
  
  it('add todo when click button', () => {
    const { getByText } = render(
      <Wrapper>
        <Mypage />
      </Wrapper>
    );
    const addButton = screen.getByText('일정 등록하기');
    fireEvent.click(addButton);
    // expect(getByText('일정을 입력해주세요')).toBeInTheDocument();
  })
});
