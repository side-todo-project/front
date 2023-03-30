import Palette from '@/styles/Palette';
import styled from 'styled-components';

const Input = styled.input.attrs({ type: 'text' })`
  width: 100%;
  height: 44px;
  background: ${(p) => p.theme.White};
  border: 1px solid ${Palette.Neutral.N200};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  padding-left: 30px;
`;

const TextInput = ({ ...props }) => <Input {...props} />;

export default TextInput;
