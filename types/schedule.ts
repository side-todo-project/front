// 일정목록 데이터
export interface ISchedule {
  id: number; // 일정 아이디
  scheduleDate: string; // 일정 날짜
  schedule: IScheduleItem[]; // 일정 목록
  isPrivate: boolean; // 공개여부
  likeCount: number; // 좋아요 수
  check: boolean[]; // 완료여부
  tags: string[]; // 태그
  ScheduleOwnerId: number; // 일정 소유자 아이디
}

// 일정 1개 타입
export interface IScheduleItem {
  when: string; // 언제
  what: string; // 무엇을
};