import styled from 'styled-components'

export const ContentInput = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  margin-bottom: 4px;
  font: normal normal bold 18px 'Open-Sans', sans-serif;
`

export const InputLine = styled.input`
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayDarker};
    color: ${({ theme }) => theme.colors.ink};
    outline: none;
    height: 28px;
`