import React from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';

interface IProps extends React.ButtonHTMLAttributes<HTMLInputElement> {
  isError: boolean;
  errorText: string;
}

const Container = styled.div`
  height: 60px;
`;

const ErrorText = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: ${(p) => p.theme.Error};
`;

const TextInputWithError = ({ isError, errorText, ...props }: IProps) => {
  return (
    <Container>
      <TextInput {...props} />
      {isError && <ErrorText>{errorText}</ErrorText>}
    </Container>
  );
};

export default TextInputWithError;
