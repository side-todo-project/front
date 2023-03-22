import styled, { css } from 'styled-components';
import Palette from './Palette';

const layoutMarginStyle = css`
  max-width: 1200px;
  height: 100%;
`;


/* ------------------------------------ FlexBox ----------------------------------- */

export const HFlex = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const VFlex = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HFlexBox = styled.div<{ customStyle?: any }>`
  ${HFlex};
  ${(p) => p.customStyle};
`;

export const VFlexBox = styled.div<{ customStyle?: any }>`
  ${VFlex};
  ${(p) => p.customStyle};
`;

