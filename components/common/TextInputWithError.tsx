import React from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';

const TextInputWithError = ({ isError, errorText, ...props }) => {
  return (
    <Container>
      <TextInput {...props} />
      {isError && <ErrorText>{errorText}</ErrorText>}
    </Container>
  );
};

const Container = styled.div`
  height: 60px;
`;

const ErrorText = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: ${(p) => p.theme.Error};
`;

export default TextInputWithError;
