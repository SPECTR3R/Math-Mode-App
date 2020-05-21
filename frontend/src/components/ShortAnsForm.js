import { useForm } from 'react-hook-form';
import React from 'react';
import { Box, FormErrorMessage, Textarea, FormLabel, FormControl, Input, Button } from '@chakra-ui/core';
import Markdown from '../components/Markdown';

export default function HookForm() {
  const { handleSubmit, errors, register, formState } = useForm();
  const [value, setValue] = React.useState('');
  const handleChange = event => setValue(event.target.value);

  // function validate(value) {
  //   let error;
  //   if (!value) {
  //     error = 'Name is required';
  //   } else if (value !== 'Naruto') {
  //     error = 'Debes rellernar este campo! 😱';
  //   }
  //   return error || true;
  // }

  function onSubmit(values) {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
    }, 1000);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="name">Pregunta</FormLabel>
        <Textarea
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
        <Input placeholder="Texto de la Respuesta" name="questionAnswer" ref={register()} />
        <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
      </FormControl>

      <Box>
        <Markdown source={value} />
      </Box>

      <Button mt={4} variantColor="teal" isLoading={formState.isSubmitting} type="submit">
        Submit
      </Button>
      
    </form>
  );
}
