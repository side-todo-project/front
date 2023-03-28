import { useQuery } from '@tanstack/react-query';
import React from 'react';

const QueryMockTest = () => {
  const { data, isLoading } = useQuery(['queryMockTest'], () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 'test-id',
          name: 'test-name',
        });
      }, 1000);
    });
  });

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      {data && (
        <div>
          <div>{data.id}</div>
          <div>{data.name}</div>
        </div>
      )}
    </div>
  );
};

export default QueryMockTest;
