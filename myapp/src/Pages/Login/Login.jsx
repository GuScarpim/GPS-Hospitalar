import React, { useState } from 'react';

import Input from '../../Components/Molecules/Input';
import Button from '../../Components/Atoms/Button';
import ErrorMessage from '../../Components/Atoms/ErrorMessage';
import Logo from '../../Components/Atoms/Logo';

import {
  Container,
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
      <Logo />

      <Card>
        <Title>Login</Title>

        <FormCustom onSubmit={handleFormSubmit}>
          <Input name='username' label='Nome' placeholder='Digite seu nome' />

          <Input
            label='Senha'
            type='password'
            name='password'
            placeholder='Digite sua senha'
          />

          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

          <Button
            isLoading={loading}
            type='button'
            onClick={() => setLoading(true)}
          >
            Entrar
          </Button>
          <Button
            emergency
            isLoading={loading}
            type='button'
            onClick={() => setLoading(true)}
          >
            Entrar sem login (Emergência)
          </Button>

          <LabelMin to='/cadastro'>Ainda não tem uma conta?</LabelMin>
        </FormCustom>
      </Card>
    </Container>
  );
};

export default Login;
