import { useUserInfo } from '@/components/common/userProvider';
import TestBox from '@/components/TestBox';

export default function Home() {
  const {user} = useUserInfo();
  console.log('####', user);
  return <TestBox />;
}
