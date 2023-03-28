import Palette from '@/styles/Palette';
import { FlexBox } from '@/styles/Utils';
import React from 'react';
import styled from 'styled-components';
const BASEURL = 'http://3.34.73.43:3000';

const Login = () => {
  return (
    <Container>
      <KakaoLoginLink href={`${BASEURL}/auth/login/kakao`}>카카오 로그인</KakaoLoginLink>
      <NaverLoginLink href={`${BASEURL}/auth/login/naver`}>네이버 로그인</NaverLoginLink>
      <GoogleLoginLink href={`${BASEURL}/auth/login/google`}>구글 로그인</GoogleLoginLink>
    </Container>
  );
};

const KakaoLoginLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 30px;
  background-color: #ffea00;
  border-radius: 6px;
`;

const NaverLoginLink = styled(KakaoLoginLink)`
  background-color: #00c73c;
`;

const GoogleLoginLink = styled(KakaoLoginLink)`
  background-color: #4285f4;
`;

const Container = styled(FlexBox).attrs({ dir: 'column', justify: 'center' })`
  width: 640px;
  height: 650px;
  background-color: ${Palette.White};
  border-radius: 20px;
  margin: 0 auto;
`;

export default Login;
