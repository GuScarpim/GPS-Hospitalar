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
} from '../Login/styles';

const Register = () => {
  const [errorMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [handleFormSubmit] = useState();

  return (
    <Container>
      <Logo />

      <Card>
        <Title>Cadastro</Title>

        <FormCustom onSubmit={handleFormSubmit}>
          <Input
            name='username'
            label='Nome'
            placeholder='Digite seu nome'
          />

          <Input
            name='email'
            label='Email'
            type='email'
            placeholder='Digite seu email'
          />

          <Input
            name='data'
            label='Data de nascimento'
            type='date'
            placeholder='DD/MM/YYYY'
          />

          <Input
            label='Senha'
            type='password'
            name='password'
            placeholder='Digite sua senha'
          />

          <Input
            label='Confirme sua senha'
            type='password'
            name='password'
            placeholder='Confirme sua senha'
          />

          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

          <Button
            isLoading={loading}
            type='button'
            onClick={() => setLoading(true)}
          >
            Cadastrar
          </Button>

          <LabelMin to='/'>Já possui um conta?</LabelMin>
        </FormCustom>
      </Card>
    </Container>
  );
};

export default Register;
