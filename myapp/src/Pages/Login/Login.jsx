import React, { useState } from 'react';

import Input from '../../Components/Molecules/Input';
import Button from '../../Components/Atoms/Button';
import ErrorMessage from '../../Components/Atoms/ErrorMessage';
import LogoGps from './images/gps-hospitalar-logo-white.png';

import {
  Container,
  ContentLogo,
  Logo,
  Card,
  Title,
  FormCustom,
  LabelMin,
} from './styles';

const Login = () => {
  const [errorMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [handleFormSubmit] = useState();

  return (
    <Container>
      <ContentLogo>
        <Logo src={LogoGps} alt='login' />
      </ContentLogo>

      <Card>
        <Title>Login</Title>

        <FormCustom onSubmit={handleFormSubmit}>
          <Input
            name='username'
            label='Usuário'
            placeholder='Digite seu usuário'
          />

          <Input
            label='Senha'
            type='password'
            name='password'
            placeholder='Digite sua senha'
          />

          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

          <Button isLoading={loading} type='button' onClick={() => setLoading(true)}>
            Entrar
          </Button>

          <LabelMin to='/cadastro'>Ainda não tem uma conta?</LabelMin>
        </FormCustom>
      </Card>
    </Container>
  );
};

export default Login;
