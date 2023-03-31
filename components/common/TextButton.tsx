import Palette from '@/styles/Palette';
import styled from 'styled-components';
import Button from './Button';

const TextButton = styled(Button)`
  background: transparent;
  border: none;
  color: ${Palette.Neutral.N400};

  &:hover {
    background: transparent;
    color: ${Palette.Primary.P200};
  }
`;

export default TextButton;
