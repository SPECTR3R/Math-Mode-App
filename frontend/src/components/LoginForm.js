import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AUTH_SERVICE from '../services/auth';
import handleAsync from '../services/handleAsync';

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

  const [loading, setLoading] = useState(false);

  function toggleLoading() {
    console.log('posi');
    setLoading(prevloading => !prevloading);
  }

  const onSubmit = async values => {
    toggleLoading();
    console.log('cargando?', loading);

    const response = await handleAsync(() => AUTH_SERVICE.LOGIN(values));
    console.log(response);
    if (response.err) {
      console.log(response.err.message);
    } else {
      console.log(response.user);

      this.setState(response.user);
    }
    toggleLoading();
    console.log('cargando?', loading);
  };

  useEffect(() => {
    setLoading(prevloading => (prevloading ? false : true));
  }, []);

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
