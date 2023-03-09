import { useUserInfo } from '@/components/common/userProvider';
import TestBox from '@/components/TestBox';
import { GetServerSideProps } from 'next';

export default function Home({cookies}) {
  const { user } = useUserInfo();
  console.log('####', user, cookies);
  return (
    <div>
      <TestBox />
      <h1>Logined: {Boolean(user).toString()}</h1>
      {user && (
        <ul>
          <li>id: {user.id}</li>
          <li>email: {user.email}</li>
          <li>nickname: {user.nickname}</li>
          <li>newUser: {user.newUser}</li>
        </ul>
      )}
      <p>accessToken: {cookies?.accessToken}</p>
      <p>refreshToken: {cookies?.refreshToken}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { cookies } = context.req;

  return {
    props: {
      cookies,
    },
  };
};
