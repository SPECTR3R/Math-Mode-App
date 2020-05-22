import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
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
  Divider,
  FormHelperText,
} from '@chakra-ui/core';
const SignupForm = () => {
  const { mode } = useParams();
  const { handleSubmit, register } = useForm();
  const auth = useAuth();
  const history = useHistory();

  const onSubmit = async values => {
    values.role = mode;

    const response = await auth.signup(values);
    if (response.err) {
      console.log(response.err.message);
    } else {
      history.push('/profile');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement children={<Icon name="info" />} />
              <Input
                type="text"
                name="firstName"
                placeholder="Nombre"
                aria-label="firstName"
                ref={register()}
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <InputGroup>
              <InputLeftElement children={<Icon name="info" />} />
              <Input
                type="text"
                name="lastName"
                placeholder="Apellido"
                aria-label="lastName"
                ref={register()}
              />
            </InputGroup>
          </FormControl>
          <Divider borderColor="gray.300" />
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
            Sign up!
          </Button>
          <FormHelperText textAlign="center">
            ¡Bienvenido!{' '}
            <span role="img" aria-label="crossedFingers">
              🤞🏼
            </span>
            <br />
            Te estás registrando como {mode === 'teacher' ? 'Educador' : 'Estudiante'}
          </FormHelperText>
        </Stack>
      </form>
      <br />
    </>
  );
};

export default SignupForm;
