import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primaryDarker};
  padding: 0;
  margin: 0;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const Card = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px 20px 0px 0px;
  padding: 20px 30px;
  height: 100%;
  background: ${({ theme }) => theme.colors.whiteSecondary};
  max-height: 100;
  overflow: auto;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.ink};
  font: normal normal 700 24px 'Poppins', sans-serif;
  text-align: center;
  margin-bottom: 30px;
`

export const ContentResetPassword = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  transform: translateX(-15px);
`

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 80px;
`

export const MiniCard = styled.div`
  width: 100%;
  margin-bottom: 40px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 0 8px -1px #00000070;
  height: 80px;
  text-align: center;
`

export const MiniCardTitle = styled.h3`
  margin-bottom: 10px;
`

export const Porcent = styled.span`
  font: normal normal 700 20px 'Poppins', sans-serif;
  color: ${({ red }) => red ? '#fb0000' : '#1447A9'};
`
