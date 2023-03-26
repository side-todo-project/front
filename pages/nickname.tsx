import React from 'react';
import styled from 'styled-components';
const BASEURL = 'http://localhost:3000';

export default function nickname() {
  const [nickname, setNickname] = React.useState('');

  const handleInput = (e) => {
    setNickname(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(nickname);
  };

  return (
    <div>
      <h1>What is your nickname?</h1>
      <StyledForm action={`${BASEURL}/${nickname}`} onSubmit={submitForm}>
        <div>
          <label>nickname</label>
          <StyledInput type="text" name="nickname" onChange={handleInput} value={nickname} />
        </div>
        <button type="submit">submit nickname</button>
      </StyledForm>
    </div>
  );
}
