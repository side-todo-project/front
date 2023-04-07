import React from 'react';
import { FlexBox } from '@/styles/Utils';

const DateView = () => {
  return (
    <FlexBox dir="row">
      <div>월</div>
      <div>화</div>
      <div>수</div>
      <div>목</div>
      <div>금</div>
      <div>토</div>
      <div>일</div>
    </FlexBox>
  );
};

export default DateView;
