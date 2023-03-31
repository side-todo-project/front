import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { useUserInfo } from '@/hooks/userProvider';
import { ITokens, IUserInfo } from '@/types';
import API, { setDefaultHeader } from '@/api/API';
import { fetchUserInfo } from '@/api/client';

/**
 * 소셜 로그인 성공시 리다이렉트 되는 페이지
 * 토큰, 유저 정보 저장후 메인 페이지로 이동
 */
interface IProps {
  userInfo: IUserInfo;
}

const LoginSuccess = ({ userInfo }: IProps) => {
  const router = useRouter();
  const { setUser } = useUserInfo();

  useEffect(() => {
    (async () => {
      // set user info
      setUser(userInfo);
      // if new user, go to nickname page
      router.push(userInfo.newUser ? '/nickname' : '/');
    })();
  }, []);

  return <div>Login Success</div>;
};

export default LoginSuccess;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const { cookies } = req;
  if (cookies) {
    // 2. header 추가
    setDefaultHeader(cookies.access);
    // 1. 유저정보 획득
    const res = await fetchUserInfo();
  }
  return {
    props: {
      userInfo: {},
    },
  };
};
