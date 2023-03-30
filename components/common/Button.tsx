import Typo from '@/styles/Typo';
import styled from 'styled-components';

const Button = styled.button<{width?: string}>`
  padding: 16px;
  gap: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
  height: 44px;
  cursor: pointer;
  ${p => p.width && `width: ${p.width}`};

  /* Primary/primary-200 */
  border: none;
  background: ${(p) => p.theme.Primary.P100};
  border-radius: 8px;

  color: ${(p) => p.theme.White};
  &:hover {
    background: ${(p) => p.theme.Primary.P200};
  }

  &:disabled {
    background: ${(p) => p.theme.Primary.P50};
  }
  /* Button text */
  ${Typo.Button.M};
  line-height: 0;
`;

export default Button;
