import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { useUserInfo } from '@/components/common/userProvider';
import { storeCookies } from '@/api/server';

const LoginSuccess = ({ query }) => {
  const router = useRouter();

  const { setUser } = useUserInfo();
  useEffect(() => {
    (async () => {
      const { accessToken, refreshToken } = query;
      await storeCookies({accessToken, refreshToken});
      setUser(query);
      router.push('/');
    })();
  },[])

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
