import React from 'react';
import { useAuth } from '../services/AuthService';
import Navbar from '../components/Navbar';
import GrayLink from '../components/GrayLink';
import { useForm } from 'react-hook-form';

import {
  Flex,
  Stack,
  Avatar,
  useColorMode,
  Box,
  Badge,
  Text,
  Input,
  Icon,
  InputGroup,
  InputLeftElement,
  Button,
  FormControl,
  FormHelperText,
} from '@chakra-ui/core';

const Profile = () => {
  const { user } = useAuth();
  const { colorMode } = useColorMode();
  const { handleSubmit, register } = useForm();


  const onSubmit = async values => {
    console.log(values);
  };

  return (
    <>
      <Navbar></Navbar>

      <Flex
        w={['90%', '90%', '80%', '70%']}
        p={3}
        boxShadow="sm"
        bg={colorMode === 'light' ? 'gray.200' : 'gray.600'}
        rounded="lg"
        my={10}
      >
        <Flex align="center" mx="2">
          <Avatar size="2xl" name={user.firstName + user.lastName} src />

          <Box mx="4">
            <Text as="h2" fontSize="xl" fontWeight="bold" mb="2">
              Bienvenido {user.firstName + user.lastName} <br />
              <Badge>{user.role === 'teacher' ? 'EDUCADOR' : 'ESTUDIANTE'}</Badge>
            </Text>

            {user.role === 'teacher' && (
              <Box>
                <Text as="h3" fontWeight="light" mb={4} fontSize="lg">
                  Hola, este es tu perfil. Para crear un examen, primero debes crear una
                  colección de preguntas. ¿Qué deseas hacer a continuación?
                </Text>

                <Flex direction="row" align="center" justify="space-around" wrap="wrap">
                  <Box>
                    <GrayLink src="/createQuestion" label="Crear pregunta" />
                    <GrayLink src="/viewQuestion" label="Ver preguntas" />
                  </Box>
                  <Box>
                    <GrayLink src="/createTest" label="Crear examen" />
                    <GrayLink src="/viewTest" label="ver examenes" />
                  </Box>
                </Flex>
              </Box>
            )}

            {user.role !== 'teacher' && (
              <Box>
                <Text as="h3" fontWeight="light" mb={4} fontSize="lg">
                Hola, este este es tu perfil. Por favor, solicita a tu educador el código de
                  examen e introdúcelo en la siguiente.
                </Text>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Stack spacing={3}>
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
                    <FormHelperText textAlign="center"></FormHelperText>
                  </Stack>
                </form>
              </Box>
            )}
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Profile;
