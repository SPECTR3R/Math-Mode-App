import React from 'react';
import { useForm } from 'react-hook-form';

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
  const { handleSubmit, errors, register, formState } = useForm();

  const onSubmit = async values => {
 //   const { login } = this.state
  //  this.setState({ loading: true })
  //  const response = await handleAsync(() => AUTH_SERVICE.LOGIN(login))
  //  console.log(response)
//if (response.err) {
 //     this.setState({ msg: response.err.message })
  //  } else {
  //    this.setState({ loggedUser: response.user, msg: 'User logged' })
 //   }
  //  this.setState({ loading: false })
  //  this.setState({ login: { email: '', password: '' } })
  }

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
