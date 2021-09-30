import styled, { keyframes } from 'styled-components'

const loaderAnimation = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const getMainBorder = (stroke, color) => `${stroke || '2px'} solid ${color}`

const getSecondaryBorder = (stroke, backgroundColor) => `${stroke || '2px'} solid ${backgroundColor}`

export const SpinnerContainer = styled.div`
  cursor: wait;
  border-radius: 50%;
  width: ${({ size }) => size || '18px'};
  height: ${({ size }) => size || '18px'};
  font-size: ${({ fontSize }) => fontSize || '18px'};
  position: relative;
  text-indent: -9999em;
  border-top: ${({ stroke, backgroundColor }) => getSecondaryBorder(stroke, backgroundColor)};
  border-right: ${({ stroke, backgroundColor }) => getSecondaryBorder(stroke, backgroundColor)};
  border-bottom: ${({ stroke, backgroundColor }) => getSecondaryBorder(stroke, backgroundColor)};
  border-left:${({ stroke, color }) => getMainBorder(stroke, color)};
  transform: translateZ(0);
  animation: ${loaderAnimation} 1.1s infinite linear;

  :after {
    border-radius: 50%;
    width: ${({ size }) => size || '18px'};
    height: ${({ size }) => size || '18px'};
  }
`
