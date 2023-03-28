import { rest } from 'msw';

export const handlers = [
  // 일정가져옴
  rest.get('/schedule', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({
      "id": 1,
      "scheduleDate": "2022-03-01",
      "schedule": [
        {
          "when": "일어나서",
          "what": "wakeup"
        },
        {
          "when": "8:00",
          "what": "breakfast"
        }
      ],
      "isPrivate": true,
      "likeCount": 31,
      "check": [
        "false",
        "true",
        "true"
      ],
      "tags": [
        "대학생",
        "아침형"
      ],
      "ScheduleOwnerId": 32
    }))
  }),
  
];
