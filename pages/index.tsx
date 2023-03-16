import { useUserInfo } from '@/components/common/userProvider';
import TestBox from '@/components/TestBox';
import axios from 'axios';
import { GetServerSideProps } from 'next';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJib2JpbjY5NzJAZ21haWwuY29tIiwiaWF0IjoxNjc4OTY3OTUwfQ.G8Swp5mv1M_LL13x-1CS8WYYW-C_vPRBbY_i8W1MjBY';

export default function Home({ cookies }) {
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
      <div>
        닉네임 설정 API 테스트
        <button
          onClick={async () => {
            const res = await axios.put(
              '/api/user/nickname',
              {
                email: 'bobin6972@gmail.com',
                nickname: 'Test Nickname222222',
              },
              {
                headers: {
                  access: TOKEN,
                },
              }
            );
            console.log('####', res);
          }}
        >
          set nickname
        </button>
      </div>
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
