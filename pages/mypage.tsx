import { FlexBox } from '@/styles/Utils';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Palette from '@/styles/Palette';
import { GetServerSideProps } from 'next';
import { useUserInfo } from '@/hooks/userProvider';
import RegisterSchedule from '@/components/mypage/ConfigSchedule';
import EmptySchedule from '@/components/mypage/EmptySchedule';
import API from '@/api/API';
import UserStatusView from '@/components/mypage/UserInfo';
import DateView from '@/views/mypage/DateView';

const Mypage = ({ userInfo, Authentication }) => {
  const { setUser } = useUserInfo();
  const [registerSchedule, setRegisterSchedule] = useState(false);

  // initialize userinfo
  useEffect(() => {
    if (userInfo) {
      setUser(userInfo);
      console.log(Authentication);
      API.defaults.headers.common['access'] = `${Authentication}`;
    }
  }, [userInfo]);

  return (
    <ContainerBox>
      {/* 좌측 */}
      <UserStatusView />
      {/* 우측 */}
      <ScheduleFlexBox>
        <DateView />
        <div>
          {registerSchedule ? (
            <RegisterSchedule />
          ) : (
            <EmptySchedule
              onClick={() => {
                setRegisterSchedule(true);
              }}
            />
          )}
        </div>
      </ScheduleFlexBox>
    </ContainerBox>
  );
};

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

export default Mypage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // 1. 쿠키에서 토큰 획득
  // 2. 토큰 사용하여 유저정보 획득
  // 3. 유저정보 전달
  const userInfo = {};
  const { req } = context;
  const { cookies } = req;
  const { Authentication } = cookies;

  return {
    props: {
      userInfo,
      Authentication,
    },
  };
};
