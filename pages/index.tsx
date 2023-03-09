import { useUserInfo } from '@/components/common/userProvider';
import TestBox from '@/components/TestBox';

export default function Home() {
  const {user} = useUserInfo();
  console.log('####', user);
  return (
    <div>
      <TestBox />
      <ul>
        <li>id: {user.id}</li>
        <li>email: {user.email}</li>
        <li>nickname: {user.nickname}</li>
        <li>newUser: {user.newUser}</li>
      </ul>
    </div>
  );
}