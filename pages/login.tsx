import React from 'react';
import styled from 'styled-components';
const BASEURL = 'http://3.34.73.43:3000';

const Login = () => {
  return (
    <div>
      <KakaoLoginLink href={`${BASEURL}/auth/login/kakao`}>
        <div>Login With Kakao</div>
      </KakaoLoginLink>
      <NaverLoginLink href={`${BASEURL}/auth/login/naver`}>
        <div>Login With Naver</div>
      </NaverLoginLink>
      <GoogleLoginLink href={`${BASEURL}/auth/login/google`}>
        <div>Login With Google</div>
      </GoogleLoginLink>
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

const NaverLoginLink = styled(KakaoLoginLink)`
  & > div {
    background-color: #00c73c;
  }
`;

const GoogleLoginLink = styled(KakaoLoginLink)`
  & > div {
    background-color: #4285f4;
  }
`;

export default Login;


