import React from 'react';
import styled from 'styled-components';

const KAKAO_AUTH_URL = '';

const Login = () => {
  return (
    <div>
      <KakaoLoginLink href={KAKAO_AUTH_URL}>
        <div>Login With Kakao</div>
      </KakaoLoginLink>
    </div>
  );
};

const KakaoLoginLink = styled.a`
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 100px;
    background-color: #ffea00;
    border-radius: 20px;
    font-size: 30px;
  }
`;

export default Login;
