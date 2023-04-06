import { FlexBox } from '@/styles/Utils';
import React from 'react';
import styled from 'styled-components';
import Palette from '@/styles/Palette';
import { GetServerSideProps } from 'next';
import EmptySchedule from '@/components/mypage/EmptySchedule';
import UserStatusView from '@/components/mypage/UserInfo';
import DateView from '@/views/mypage/DateView';
import useScheduleQuery from '@/hooks/query/useScheduleQuery';
import Schedule from '@/components/mypage/Schedule';
import FetchDataWrapper from '@/components/common/FetchDataWrapper';
import LoadingUIView from '@/views/common/LoadingUIView';
import LoadingErrorView from '@/views/common/LoadingErrorView';

const ContainerBox = styled(FlexBox).attrs({ dir: 'row' })`
  width: 100%;
  height: 43.75rem;
`;

const ScheduleFlexBox = styled(FlexBox).attrs({ dir: 'column' })`
  width: 50%;
  height: 100%;
  border-radius: 20px;
  background-color: ${Palette.White};
`;

const Mypage = ({ scheduleId = 1 }) => {
  const { data, isLoading, isError, isEmpty } = useScheduleQuery(scheduleId);
  console.log('################### isEmpty', isEmpty)
  return (
    <ContainerBox>
      {/* 좌측 */}
      <UserStatusView />
      {/* 우측 */}
      <ScheduleFlexBox>
        <DateView />
        <FetchDataWrapper
          isLoading={isLoading}
          isError={isError}
          loadingUI={<LoadingUIView />}
          errorUI={<LoadingErrorView />}
        >
          <div>{isEmpty ? <EmptySchedule /> : <Schedule data={data} /> }</div>
        </FetchDataWrapper>
      </ScheduleFlexBox>
    </ContainerBox>
  );
};

export default Mypage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // 1. 쿠키에서 토큰 획득
  // 2. 토큰 사용하여 유저정보 획득
  // 3. 유저정보 전달
  const userInfo = {};
  const { req } = context;
  const { cookies } = req;

  return {
    props: {
      userInfo,
    },
  };
};
