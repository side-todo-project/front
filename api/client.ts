import { ISchedule, IScheduleCreateForm } from '@/types/schedule';
import API from './API';
import AuthAPI from './AuthAPI';

export const setNickname = (client) => {
  const { nickname } = client;
  const nicknameEl = document.querySelector('.nickname');
  nicknameEl.textContent = nickname;
};

/* -------------------------------- Schedule -------------------------------- */

// 일정 생성하기
export const createSchedule = async (schedule: IScheduleCreateForm) => {
  const res = await API.post('/schedule', schedule);

  return res.data;
};

// 일정 가져오기
export const fetchSchedule = async (scheduleId) => {
  const res = await API.get(`/schedule/${scheduleId}`);
  return res.data;
};

// 일정 수정하기
export const updateSchedule = async (scheduleId, newSchedule) => {
  const res = await API.put(`/schedule/${scheduleId}`, newSchedule);
  return res.data;
};

// 완료된 일정 체크하기
export const checkSchedule = async (scheduleId, index) => {
  const res = await API.put(`/schedule/check/${scheduleId}`, { scheduleIdx: index });
  return res.data;
};

// 공개된 최신 일정불러오기
export const fetchLatestSchedule = async () => {
  const res = await API.get<ISchedule[]>('/schedule/latest');
  return res.data;
};

/* ---------------------------------- User ---------------------------------- */

// 유저 정보 가져오기
export const fetchUserInfo = async () => {
  const res = await API.get(`/user`);

  return res.data;
};
