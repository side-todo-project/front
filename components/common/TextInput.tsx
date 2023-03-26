import Palette from '@/styles/Palette';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 60px;
  max-width: 300px;
`;

const Input = styled.input.attrs({ type: 'text' })`
  width: 100%;
  height: 44px;
  background: ${(p) => p.theme.White};
  border: 1px solid ${Palette.Neutral.N200};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  padding-left: 30px;
`;

const ErrorText = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: ${(p) => p.theme.Error};
`;

const TextInput = ({ isError, errorText, ...props }) => {
  return (
    <Container>
      <Input {...props} />
      {isError && <ErrorText>{errorText}</ErrorText>}
    </Container>
  );
};

export default TextInput;
