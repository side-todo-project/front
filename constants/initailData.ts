import { IScheduleCreateForm } from '@/types/schedule';

/**
 * create/update schedule initial data
 */
export const initialScheduleData: IScheduleCreateForm = {
  scheduleDate: '2022-03-01',
  schedule: [
    {
      when: '일어니서',
      what: '씻기',
    },
  ],
  isPrivate: true,
  tags: ['태그1', '태그2'],
};
