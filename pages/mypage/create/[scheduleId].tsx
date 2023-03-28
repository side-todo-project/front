/**
 * 마이페이지-일정 수정 페이지
 */

const MyPageScheduleEdit = () => {
  const router = useRouter();
  const { scheduleId } = router.query;

  return (
    <div>
      <h1>마이페이지-일정 수정 페이지</h1>
      <p>scheduleId: {scheduleId}</p>
    </div>
  );
};