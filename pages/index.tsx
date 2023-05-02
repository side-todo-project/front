import dynamic from 'next/dynamic';
import React, { Suspense, useEffect } from 'react';

const LazyImage = dynamic(() => import('@/views/common/ImageView'), {
  ssr: false,
});

// 홈페이지 작업
const HomePage = () => {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    return () => {
      console.log('hello', count);
    };
  });

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <Suspense fallback={<div>loading................</div>}>
        <LazyImage src="https://picsum.photos/200/200" width={200} height={200} />
      </Suspense>
    </>
  );
};

export default HomePage;
