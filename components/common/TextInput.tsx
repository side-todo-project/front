import React from 'react';
import styled from 'styled-components';

const TextInput = ({ isError, errorText, ...props }) => {
  return (
    <Container>
      <Input {...props}/>
      {isError && <ErrorText>{errorText}</ErrorText>}
    </Container>
  );
};

const Container = styled.div`
  width: 360px;
  height: 60px;
`;

const Input = styled.input.attrs({ type: 'text' })`
  width: 100%;
  height: 44px;
  background: #ffffff;
  border: 1px solid #e4e7ec;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
`;

const ErrorText = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: red;
`;

export default TextInput;
