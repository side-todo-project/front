import styled, { css } from 'styled-components';

// 레이아웃 좌우 여백
export const layoutMarginStyle = css`
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

export const FlexBox = styled.div<{
  dir: 'row' | 'column';
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  alignContent?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'space-between' | 'space-around';
}>`
  ${(p) => (p.dir === 'row' ? HFlex : VFlex)};
  justify-content: ${(p) => p.justify};
  align-items: ${(p) => p.alignItems};
  align-content: ${(p) => p.alignContent};
`;
