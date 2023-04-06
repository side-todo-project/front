export const mockBaseUrl = 'http://localhost/api';

// 비었을때
export const mockScheduleData = {
  id: 1,
  scheduleDate: '2022-03-01',
  schedule: [
    {
      when: '일어나서',
      what: 'wakeup',
    },
    {
      when: '8:00',
      what: 'breakfast',
    },
  ],
  isPrivate: true,
  likeCount: 31,
  check: ['false', 'true', 'true'],
  tags: ['대학생', '아침형'],
  ScheduleOwnerId: 32,
};