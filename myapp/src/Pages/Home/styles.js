import styled from 'styled-components';

// import { Map } from 'google-maps-react';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primaryDarker};
  padding: 0;
  margin: 0;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

// export const MapCustom = styled(Map)`
//   max-width: calc(100% - 20px);
//   margin-left: -20px;
//   max-height: 80%;
// `