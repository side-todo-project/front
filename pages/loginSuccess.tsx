import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { useUserInfo } from '@/components/common/userProvider';
import { storeCookies } from '@/api/server';
import { ITokens, IUserInfo } from '@/types';

/**
 * 소셜 로그인 성공시 리다이렉트 되는 페이지
 * 토큰, 유저 정보 저장후 메인 페이지로 이동
 */
interface IProps {
  query: IUserInfo & ITokens;
}

const LoginSuccess = ({ query }: IProps) => {
  const router = useRouter();

  const { setUser } = useUserInfo();
  useEffect(() => {
    (async () => {
      const { accessToken, refreshToken, ...userInfo } = query;
      // set tokens
      await storeCookies({ accessToken, refreshToken });
      // set user info
      setUser(userInfo);
      // if new user, go to nickname page
      router.push(userInfo.newUser ? '/nickname' : '/');
    })();
  }, [query, router, setUser]);

  return <div>Login Success</div>;
};

export default LoginSuccess;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  return {
    props: {
      query,
    },
  };
};
