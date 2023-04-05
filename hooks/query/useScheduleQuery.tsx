import { fetchLatestSchedule, fetchSchedule } from '@/api/client';
import { useQuery } from '@tanstack/react-query';

const useScheduleQuery = () => {
  const queryObj = useQuery(['schedule'], fetchLatestSchedule, {
    enabled: true,
  });
  return queryObj;
};

export default useScheduleQuery;
