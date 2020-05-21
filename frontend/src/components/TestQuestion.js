import React from 'react';
import {
  Input,
  Stack,
  Icon,
  InputGroup,
  InputLeftElement,
  Button,
  FormControl,
  Textarea,
} from '@chakra-ui/core';

const ShortAnsForm = ({ handleChange, value }) => {
  return (
    <form action="submit">
      <Stack spacing={3}>
        <FormControl isRequired>
          <Textarea
            value={value}
            onChange={handleChange}
            size="sm"
            resize="vertical"
            placeholder="Texto de la pregunta"
          />
        </FormControl>
        <FormControl isRequired>
          <InputGroup>
            <InputLeftElement children={<Icon name="email" />} />
            <Input type="email" placeholder="Texto de la pregunta" aria-label="question" />
f          </InputGroup>
        </FormControl>
        <Button
          type="submit"
          boxShadow="sm"
          _hover={{ boxShadow: 'md' }}
          _active={{ boxShadow: 'lg' }}
        >
          Guardar Pregunta
        </Button>
      </Stack>
    </form>
  );
};

export default ShortAnsForm;





