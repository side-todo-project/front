import { IScheduleCreateForm } from '@/types/schedule';
import API from './API';
import AuthAPI from './AuthAPI';

export const setNickname = (client) => {
  const { nickname } = client;
  const nicknameEl = document.querySelector('.nickname');
  nicknameEl.textContent = nickname;
};

// schedule

// 일정 생성하기
export const createSchedule = (schedule: IScheduleCreateForm) => {
  return API.post('/schedule', schedule);
};

// 일정 가져오기
export const fetchSchedule = (scheduleId) => {
  return API.get(`/schedule/${scheduleId}`);
};

// 일정 수정하기
export const updateSchedule = (scheduleId, newSchedule) => {
  return API.put(`/schedule/${scheduleId}`, newSchedule);
};

// 완료된 일정 체크하기
export const checkSchedule = (scheduleId, index) => {
  return API.put(`/schedule/check/${scheduleId}`, { scheduleIdx: index });
};

// 공개된 최신 일정불러오기
export const fetchLatestSchedule = () => {
  return API.get('/schedule/latest');
};
