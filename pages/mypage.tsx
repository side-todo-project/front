import Button from '@/components/common/Button';
import { FlexBox } from '@/styles/Utils';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import characterFirst from '@/public/assets/header/character-first.svg';
import Image from 'next/image';
import Palette from '@/styles/Palette';
import TextInput from '@/components/common/TextInput';
import { GetServerSideProps } from 'next';
import { useUserInfo } from '@/hooks/userProvider';
import RegisterSchedule from '@/components/mypage/ConfigSchedule';
import { ISchedule } from '@/types/schedule';
import EmptySchedule from '@/components/mypage/EmptySchedule';
import API from '@/api/API';

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
      <CharacterFlexBox>
        <FlexBox dir="column" justify="space-between" className="title-box">
          <FlexBox dir="row">
            <p>순빵999</p>
            <p>시작한지 1일쩨</p>
          </FlexBox>
          <FlexBox dir="row" className="introduction-box">
            <TextInput />
            <Button>확인</Button>
          </FlexBox>
        </FlexBox>
        <Image src={characterFirst} alt="character-first" width={220.6} height={274.4} />
        <FlexBox dir="row">
          <div>mission</div>
          <p>3일 연속 일정 클리어에 성공하기</p>
        </FlexBox>
      </CharacterFlexBox>
      {/* 우측 */}
      <ScheduleFlexBox>
        <FlexBox dir="row">
          <div>월</div>
          <div>화</div>
          <div>수</div>
          <div>목</div>
          <div>금</div>
          <div>토</div>
          <div>일</div>
        </FlexBox>
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

const CharacterFlexBox = styled(FlexBox).attrs({ dir: 'column', justify: 'space-between' })`
  width: 50%;
  height: 100%;
  background-color: orange;
  .title-box {
    height: 100px;
    width: 100%;
    background-color: green;
  }
  .introduction-box {
    width: 100%;
    height: 44px;
    background-color: yellow;
  }
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
      Authentication
    },
  };
};
