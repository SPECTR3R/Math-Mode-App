import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../services/AuthService';

import {
  Input,
  Stack,
  Icon,
  InputGroup,
  InputLeftElement,
  Button,
  FormControl,
  FormHelperText,
} from '@chakra-ui/core';

const LoginForm = () => {
  const { handleSubmit, register } = useForm();
  const auth = useAuth();
  const history = useHistory();

  const onSubmit = async values => {
    console.log(values);

    const response = await auth.login(values);
    if (response.err) {
      console.log(response.err.message);
    } else {
      console.log(response.user);
      history.push('/profile');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<Icon name="email" />} />
            <Input
              name="email"
              type="email"
              placeholder="Correo electrónico"
              aria-label="Email"
              ref={register()}
            />
          </InputGroup>
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<Icon name="lock" />} />
            <Input
              name="password"
              type="password"
              placeholder="Contraseña"
              aria-label="Password"
              ref={register()}
            />
          </InputGroup>
        </FormControl>
        <Button
          type="submit"
          boxShadow="sm"
          _hover={{ boxShadow: 'md' }}
          _active={{ boxShadow: 'lg' }}
        >
          Inicia Sesión
        </Button>
        <FormHelperText textAlign="center">
          ¡Bienvenido de vuelta!
          <br />
          🏠
        </FormHelperText>
      </Stack>
    </form>
  );
};

export default LoginForm;
