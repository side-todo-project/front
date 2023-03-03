import TestBox from "@/components/TestBox";
import { render, screen } from "@testing-library/react";

describe('test', () => {
  it('test1', () => {
    expect(true).toBeTruthy();
  });
});

describe('RTL Test', () => {
  it('test1', () => {
    render(<TestBox />);
    screen.getByText('Test Box')
  });
});


export {}