import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const QueryMockTest = () => {
  const { data, isLoading } = useQuery(['queryMockTest'], async () => {
    const res = await axios.get('/test');
    return res.data;
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
