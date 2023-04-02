import React, { useState } from 'react';
import Button from '../common/Button';
import ConfigSchedule from './ConfigSchedule';

/**
 * 등록된 일정
 */
const Schedule = ({data}) => {
  const [isConfigMode, setIsConfigMode] = useState(false);
  const onClickToConfig = () => {
    setIsConfigMode(true);
  };

  if (isConfigMode) return <ConfigSchedule initialData={data}/>;

  return (
    <div>
      <Button width="100%" onClick={onClickToConfig}>
        일정 등록하기
      </Button>
    </div>
  );
};

export default Schedule;
