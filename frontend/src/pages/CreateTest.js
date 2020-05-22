import React, { useState, useEffect } from 'react';
import { useAuth } from '../services/AuthService';
import Navbar from '../components/Navbar';
import { useForm } from 'react-hook-form';
import QuestionDetail from '../components/QuestionDetail';
import { GET_QUESTIONS } from '../services/questions';

import {
  Flex,
  Stack,
  useColorMode,
  Text,
  Input,
  Icon,
  InputGroup,
  InputLeftElement,
  Button,
  FormControl,
} from '@chakra-ui/core';

const CreateTest = () => {
  const { user } = 'yony'; //useAuth();
  const { colorMode } = useColorMode();
  const { handleSubmit, register } = useForm();

  const [questions, setQuestions] = useState();

  useEffect(() => {
    const updateQuestions = async () => {
      const res = await GET_QUESTIONS();
      setQuestions(res.data);
      console.log(questions);
    };
    updateQuestions();
  }, []);

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
        my={5}
        justify="center"
        direction="column"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack w="full" spacing={3}>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<Icon name="info" />} />
                <Input
                  name="testName"
                  type="text"
                  placeholder="código de examen "
                  aria-label="testName"
                  ref={register()}
                />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<Icon name="calendar" />} />
                <Input
                  name="dueDate"
                  type="date"
                  placeholder="fecha limite"
                  aria-label="dueDate"
                  ref={register()}
                />
              </InputGroup>
            </FormControl>
          </Stack>
          <Flex
            p={3}
            boxShadow="sm"
            bg={colorMode === 'light' ? 'gray.50' : 'gray.500'}
            rounded="lg"
            my={5}
            justify="space-around"
            align="center"
            wrap="wrap"
          >
            <Text as="h4" textAlign="center" w="300px" fontWeight="ligth" mb={2} fontSize="lg">
              Pregunta
            </Text>
            <Text as="h4" textAlign="center" w="300px" fontWeight="ligth" mb={2} fontSize="lg">
              Respuesta
            </Text>
            <Text as="h4" textAlign="center" w="300px" fontWeight="bold" mb={2} fontSize="lg">
              Seleccionar
            </Text>
          </Flex>
          {questions.map(question => (
            <FormControl>
              <QuestionDetail
                colorMode={colorMode}
                question={question.questionSource} //questions[0].questionSource}
                answer={question.questionAnswer}
                register={register}
                selOrder={0}
              />
            </FormControl>
          ))}

          <Button
            type="submit"
            boxShadow="sm"
            _hover={{ boxShadow: 'md' }}
            _active={{ boxShadow: 'lg' }}
          >
            Crear examen
          </Button>
        </form>
      </Flex>
    </>
  );
};

export default CreateTest;
