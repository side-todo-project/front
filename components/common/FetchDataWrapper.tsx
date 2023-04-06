import React from 'react';

interface IProps {
  isLoading: boolean;
  isError: boolean;
  loadingUI?: React.ReactNode;
  errorUI?: React.ReactNode;
  children: React.ReactNode;
}

const FetchDataWrapper = ({ isLoading, isError, loadingUI, errorUI, children }: IProps) => {
  if (isLoading) {
    return <>{loadingUI}</>;
  }
  if (isError) {
    return <>{errorUI}</>;
  }
  return <>{children}</>;
};

export default FetchDataWrapper;
