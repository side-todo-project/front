import axios from 'axios';
import { redirect } from 'next/dist/server/api-utils';
import { basename } from 'path';
import React, {useState} from 'react';
import styled from 'styled-components';
const BASEURL = 'http://localhost:3030';

export default function nickname() {
  const [nickname, setNickname] = React.useState('');

  const handleInput = (e) => {
    setNickname(e.target.value);
  }

  const submitForm = async (e) => {
    e.preventDefault()
    console.log(nickname);
    // await axios.post(`${BASEURL}/api/user/nickname`, {nickname});
  }

  const isValidNickname = () => {
  }

  return (
    <div>
      <StyledForm action={`${BASEURL}/${nickname}`} onSubmit={submitForm}>
        <StyledImg></StyledImg>
        <StyledP>처음이시군요!<br/>닉네임을 설정해주세요</StyledP>
        <div>
          <StyledInput type="text" name="nickname" onChange={handleInput} value={nickname} />
        </div>
        <StyledButton type="submit">submit nickname</StyledButton>
      </StyledForm>
    </div>
  )
}

const StyledForm = styled.form`
  background-color: #F2F4F7;
  padding: 40px;
  margin: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledImg = styled.img`
  width: 140px;
  height: 140px;
  background-color: white;
  margin: 21px
`

const StyledP = styled.p`
  color: white;
  line-height: 32px;
  font-size: 24px;
  text-align: center;
  margin-bottom: 31px;
`

const StyledInput = styled.input`
  border: 1px solid;
  height: 44px;
  width: 360px;
  padding: 10px, 14px, 10px, 14px;
  background-color: white;
  border: #101828;
  color: #98A2B3;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 32px;
  margin-bottom: 32px;
  border-radius: 8px;
`

const StyledButton = styled.button`
    background-color: #E0E0FE;
    height: 44px;
    width: 360px;
    border: none;
    border-radius: 8px;
    padding: 16px, 8px, 16px, 8px;
    font-family: Pretendard;
    font-size: 16px;
    line-height: 24px;
    color: white;
    curser: pointer;
`