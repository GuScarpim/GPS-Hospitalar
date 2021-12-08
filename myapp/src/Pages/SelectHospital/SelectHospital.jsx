import React from 'react';

import Logo from '../../Components/Atoms/Logo';
import { useHistory } from 'react-router';

import {
  Container,
  Card,
  Title,
  MiniCard,
  MiniCardTitle,
  Porcent,
  ContainerCards
} from './styles';

const SelectHospital = () => {
  const history = useHistory();

  function mapsPush() {
    history.push('/home');
  }

  return (
    <Container>
      <Logo />

      <Card onClick={mapsPush}>
        <Title>Selecione o hospital desejado</Title>

        <ContainerCards>
          <MiniCard>
            <MiniCardTitle>Hospital São Miguel</MiniCardTitle>
            <Porcent>30%</Porcent>
          </MiniCard>

          <MiniCard>
            <MiniCardTitle>Hospital de Clínicas Jardim Helena</MiniCardTitle>
            <Porcent red>60%</Porcent>
          </MiniCard>

          <MiniCard>
            <MiniCardTitle>Hospital Dia</MiniCardTitle>
            <Porcent red>90%</Porcent>
          </MiniCard>
        </ContainerCards>
      </Card>
    </Container>
  );
};

export default SelectHospital;
