import { UseQueryOptions } from '@tanstack/react-query';

export const defaultQueryOptions: UseQueryOptions = {
  keepPreviousData: false, // 새롭게 fetch시 이전 데이터 유지 여부
  refetchOnWindowFocus: false, // 창이 focus될때마다 refetch 여부
  refetchInterval: false, // 주기적으로 refetch 여부
};
