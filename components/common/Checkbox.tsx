import React from 'react'
import styled from 'styled-components'

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 20px;
  height: 20px;
  background: ${p => p.theme.White};
  border: 1px solid ${p => p.theme.Neutral.N200};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
  
  &::before {
    width: 20px;
    height: 20px;
    background-color: red;
  }

  &:checked::before {
    width: 20px;
    height: 20px;
    background-color: blue;
  }
`

export default Checkbox