import styled, { css } from 'styled-components'

const hoverCss = css`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
`

const Emergency = css`
  margin-top: -15px;
  background: ${({ theme }) => theme.colors.secondaryDarker};
  border: 1px solid ${({ theme }) => theme.colors.secondaryDarker} !important;

  &:hover {
    color: ${({ theme }) => theme.colors.secondaryDarker} !important;
    background: ${({ theme }) => theme.colors.transparent} !important;
  }
`

export const ButtonContainer = styled.button`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  height: 40px;
  transition: all 0.3s linear;
  margin: 30px 0 25px;
  font: normal normal bold 18px 'Open-Sans', sans-serif;
  cursor: ${({ isLoading }) => isLoading ? 'wait' : 'pointer'};
  outline: none;
  ${({ emergency }) => emergency && Emergency};

  &:hover {
    ${({ isLoading }) => !isLoading && hoverCss}
  }
`
