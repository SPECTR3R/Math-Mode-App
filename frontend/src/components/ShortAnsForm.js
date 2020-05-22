import { useForm } from 'react-hook-form';
import React from 'react';

import {
  Box,
  FormErrorMessage,
  Textarea,
  FormLabel,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/core';
import MathRender from '../components/MathRender';

export default function HookForm() {
  const { handleSubmit, errors, register, formState } = useForm();
  const [value, setValue] = React.useState('');
  const [value2, setValue2] = React.useState('');

  const handleChange = event => setValue(event.target.value);
  const handleChange2 = event => setValue2(event.target.value);

  function onSubmit({ questionSource, questionAnswer }) {
    const data = {
      questionType: 'shortAns',
      questionCreator: 'yomero',
      questionSource: questionAnswer,
    };
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="name">Pregunta</FormLabel>
        <Textarea
          isRequired
          name="questionSource"
          value={value}
          onChange={handleChange}
          size="sm"
          resize="vertical"
          placeholder="Texto de la pregunta"
          ref={register()}
        />

        <br />

        <FormLabel htmlFor="name">Respuesta</FormLabel>
        <Input
          isRequired
          value={value2}
          onChange={handleChange2}
          placeholder="Texto de la Respuesta"
          name="questionAnswer"
          ref={register()}
        />
        <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
      </FormControl>

      <Button my={4} isLoading={formState.isSubmitting} type="submit">
        Submit
      </Button>
      {(value || value2) && (
        <Box w="full" p={4} rounded="lg" bg="gray.400">
          {value && 'Pregunta:'}
          <MathRender source={value} />
          {value2 && 'Respuesta:'}
          <MathRender source={value2} />
        </Box>
      )}
    </form>
  );
}
