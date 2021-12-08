import React, { useState } from 'react';

import Input from '../../Components/Molecules/Input';
import Button from '../../Components/Atoms/Button';
import ErrorMessage from '../../Components/Atoms/ErrorMessage';
import Logo from '../../Components/Atoms/Logo';
import { useHistory } from 'react-router';

import { Container, Card, Title, FormCustom, LabelMin } from './styles';

const Login = () => {
  const [errorMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [handleFormSubmit] = useState();
  const history = useHistory();

  function login(tipo) {
    if (!tipo) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        history.push('/home');
      }, 2000);
    } else {
      history.push('/home');
    }
  }

  return (
    <Container>
      <Logo />

      <Card>
        <Title>Login</Title>

        <FormCustom onSubmit={handleFormSubmit}>
          <Input
            required
            name='username'
            label='Nome'
            placeholder='Digite seu nome'
          />

          <Input
            required
            label='Senha'
            type='password'
            name='password'
            placeholder='Digite sua senha'
          />

          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

          <Button isLoading={loading} type='button' onClick={login}>
            Entrar
          </Button>
          <Button emergency type='button' onClick={() => login('emergency')}>
            Entrar sem login (Emergência)
          </Button>

          <LabelMin to='/cadastro'>Ainda não tem uma conta?</LabelMin>
        </FormCustom>
      </Card>
    </Container>
  );
};

export default Login;
