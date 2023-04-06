import { fetchSchedule } from '@/api/client';
import { ISchedule } from '@/types/schedule';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const useScheduleQuery = (scheduleId: number) => {
  const queryObj = useQuery<ISchedule, AxiosError>(['schedule'], () => fetchSchedule(scheduleId), {
    enabled: true,
  });
  return {
    ...queryObj,
    isEmpty: queryObj.data === {},
  };
};

export default useScheduleQuery;
